import { Cities, Fonts } from '../types';
import Game from './../scenes/Game';
import Utils from './../libs/Utils';
import api from './../libs/Api';

const cityNames = ['', 'Санкт-Петербург', 'Владивосток', 'Иркутск', 'Казань', 'Ижевск', 'Нижний Новгород', 'Саратов', 'Волгоград', 'Я из другого города'];
export default class SetCityScreen {
  private scene: Game;
  private mainBg: Phaser.GameObjects.Sprite;
  private blurBg: Phaser.GameObjects.Sprite;
  private selectedCity: Cities;
  private zones: Phaser.GameObjects.Zone[];
  private yesButton: Phaser.GameObjects.Sprite;
  private noButton: Phaser.GameObjects.Sprite;
  private cityText: Phaser.GameObjects.Text;
  private textBg: Phaser.GameObjects.Sprite;
  private question: Phaser.GameObjects.Sprite;
  private texts: Phaser.GameObjects.Text[];

  constructor(scene: Game) {
    this.scene = scene;
    this.zones = [];
    this.texts = [];
    this.createElements();
  }

  private createElements() {
    this.mainBg = this.scene.add.sprite(0, 0, 'city-1').setOrigin(0);
    this.blurBg = this.scene.add.sprite(0, 0, 'city-2').setOrigin(0).setVisible(false);
    this.createButtons();
    this.createCityText();
    
    const zone1 = this.createZone(495, Cities.SPB);
    const zone2 = this.createZone(495 + 69.5, Cities.Vladivostok);
    const zone3 = this.createZone(495 + 69.5 * 2, Cities.Irkutsk);
    const zone4 = this.createZone(495 + 69.5 * 3, Cities.Kazan);
    const zone5 = this.createZone(495 + 69.5 * 4, Cities.Izhevsk);
    const zone6 = this.createZone(495 + 69.5 * 5, Cities.NN);
    const zone7 = this.createZone(495 + 69.5 * 6, Cities.Saratov);
    const zone8 = this.createZone(495 + 69.5 * 7, Cities.Volgograd);
    const zone9 = this.createZone(495 + 69.5 * 8, Cities.Another);
    this.zones.push(zone1.zone, zone2.zone, zone3.zone, zone4.zone, zone5.zone, zone6.zone, zone7.zone, zone8.zone, zone9.zone);
    this.texts.push(zone1.text, zone2.text, zone3.text, zone4.text, zone5.text, zone6.text, zone7.text, zone8.text, zone9.text);
  }
  
  private createZone(y: number, city: Cities): { zone: Phaser.GameObjects.Zone, text: Phaser.GameObjects.Text } {
    const { centerX } = this.scene.cameras.main;
    const text = this.scene.add.text(100 + (6 * (city - 1)), y, cityNames[city], {
      fontFamily: Fonts.Tele2DisplaySerif_Regular,
      wordWrap: { width: 450 }, 
      fontSize: '39px',
      color: '#fffefe',
    }).setAngle(-5);
    const zone = this.scene.add.zone(centerX, y, 450, 50).setDropZone(undefined, () => {}).setAngle(-5);
    Utils.click(zone, () => {
      this.selectedCity = city;
      this.openNextScreen(true);
    });
    return { zone, text };
  }

  private openNextScreen(state: boolean): void {
    this.mainBg.setVisible(!state);
    this.zones.forEach(el => el.setVisible(!state));
    this.texts.forEach(el => el.setVisible(!state));
    this.blurBg.setVisible(state);
    this.yesButton.setVisible(state);
    this.noButton.setVisible(state);
    this.cityText.setVisible(state).setText(cityNames[this.selectedCity]);
    this.textBg.setVisible(state).setDisplaySize(this.cityText.width + 20, this.cityText.height + 20);
    const bounds = this.textBg.getBounds();
    const offsetX = bounds.height > 150 ? 13 : 7;
    this.question.setVisible(state).setX(bounds.left + offsetX).setY(bounds.bottom - 10);
  }

  private createButtons(): void {
    const { centerX, centerY } = this.scene.cameras.main;
    this.yesButton = this.scene.add.sprite(centerX, centerY + 250, 'yes-button').setVisible(false);
    this.noButton = this.scene.add.sprite(centerX, centerY + 400, 'no-button').setVisible(false);
    Utils.clickButton(this.scene, this.noButton, () => {
      this.openNextScreen(false);
    });
    Utils.clickButton(this.scene, this.yesButton, () => {
      api.setCity({ vkId: this.scene.state.vkId, city: this.selectedCity }).then(res => {
        if (!res.error) {
          this.scene.state.currentDay = res.currentDay;
          this.scene.state.timeToNewDay = res.timeToNewDay * 1000;
          this.scene.state.city = this.selectedCity;
          this.scene.scene.restart(this.scene.state);
        }
      });
    });
  }

  private createCityText(): void {
    const { centerY } = this.scene.cameras.main;
    const x = 45;
    const y = centerY - 115;
    this.textBg = this.scene.add.sprite(x - 12, y - 10, 'black-pixel').setOrigin(0).setAngle(-5).setVisible(false);
    this.question = this.scene.add.sprite(0, 0, 'city-note').setOrigin(0).setVisible(false);
    this.cityText = this.scene.add.text(x, y, cityNames[this.selectedCity], {
      fontFamily: Fonts.Standardstencil,
      fontSize: '60px',
      wordWrap: { width: 400 },
    }).setAngle(-5).setVisible(false);
  }

  public destroy() {
    this.mainBg.destroy();
    this.blurBg.destroy();
    this.yesButton.destroy();
    this.noButton.destroy();
    this.cityText.destroy();
    this.textBg.destroy();
    this.question.destroy();
    this.zones.forEach(el => el.destroy());
    this.texts.forEach(el => el.destroy());
  }
};
