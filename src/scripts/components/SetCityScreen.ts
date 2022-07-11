import { Cities, Fonts } from '../types';
import Game from './../scenes/Game';
import Utils from './../libs/Utils';

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

  constructor(scene: Game) {
    this.scene = scene;
    this.zones = [];
    this.createElements();
  }

  private createElements() {
    this.mainBg = this.scene.add.sprite(0, 0, 'city-1').setOrigin(0);
    this.blurBg = this.scene.add.sprite(0, 0, 'city-2').setOrigin(0).setVisible(false);
    this.createButtons();
    this.createCityText();
    this.zones.push(this.createZone(480, Cities.SPB));
    this.zones.push(this.createZone(480 + 80, Cities.Vladivostok));
    this.zones.push(this.createZone(480 + 80 * 2, Cities.Irkutsk));
    this.zones.push(this.createZone(480 + 80 * 3, Cities.Kazan));
    this.zones.push(this.createZone(480 + 80 * 4, Cities.Izhevsk));
    this.zones.push(this.createZone(480 + 80 * 5, Cities.NN));
    this.zones.push(this.createZone(480 + 80 * 6, Cities.Saratov));
    this.zones.push(this.createZone(480 + 80 * 7, Cities.Volgograd));
    this.zones.push(this.createZone(480 + 80 * 8, Cities.Another));
  }
  
  private createZone(y: number, city: Cities): Phaser.GameObjects.Zone {
    const { centerX } = this.scene.cameras.main;
    const zone = this.scene.add.zone(centerX, y, 450, 50).setDropZone(undefined, () => {}).setAngle(-5);
    Utils.click(zone, () => {
      this.selectedCity = city;
      this.openNextScreen(true);
    });
    return zone;
  }

  private openNextScreen(state: boolean): void {
    this.mainBg.setVisible(!state);
    this.zones.forEach(el => el.setVisible(!state));
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
      this.scene.state.city = this.selectedCity;
      this.destroy();
      this.scene.scene.restart(this.scene.state);
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
  }

};
