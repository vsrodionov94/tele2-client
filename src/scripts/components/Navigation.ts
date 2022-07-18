import Game from './../scenes/Game';
import { Fonts, Screens } from '../types';
import Utils from './../libs/Utils';

export default class Navigation {
  private scene: Game;
  private deferrerButton: Phaser.GameObjects.Sprite;
  private currentButton: Phaser.GameObjects.Sprite;
  private listButton: Phaser.GameObjects.Sprite;

  constructor(scene: Game) {
    this.scene = scene;
    this.create();
  }

  private create() {
    const { centerX, height } = this.scene.cameras.main;
    this.scene.add.sprite(centerX, height, 'nav-bg').setOrigin(0.5, 1).setDepth(1);
    const { currentScreen } = this.scene.state;

    this.deferrerButton = this.scene.add.sprite(centerX - 220, height - 83, currentScreen !== Screens.Deferrer ? 'disable-deferrer' : 'active-deferrer').setDepth(1);
    this.currentButton = this.scene.add.sprite(centerX, height - 83, currentScreen !== Screens.CurrentTask ? 'disable-current' : 'active-current').setDepth(1);
    this.listButton = this.scene.add.sprite(centerX + 220, height - 83, currentScreen !== Screens.DoneList ? 'disable-list' : 'active-list').setDepth(1);

    const fontStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      fontFamily: Fonts.Tele2DisplaySerif_Bold,
      fontSize: '22px',
      color: '#000000'
    };

    this.scene.add.text(this.deferrerButton.x, this.deferrerButton.y + 62, 'Отложенное', fontStyle).setOrigin(0.5).setDepth(1);
    this.scene.add.text(this.currentButton.x, this.currentButton.y + 62, 'Сегодня', fontStyle).setOrigin(0.5).setDepth(1);
    this.scene.add.text(this.listButton.x, this.listButton.y + 62, 'Выполненное', fontStyle).setOrigin(0.5).setDepth(1);

    if (currentScreen !== Screens.Deferrer) {
      Utils.clickButton(this.scene, this.deferrerButton, () => {
        this.scene.state.currentScreen = Screens.Deferrer;
        this.scene.scene.restart(this.scene.state);
      });
    }

    if (currentScreen !== Screens.CurrentTask) {
      Utils.clickButton(this.scene, this.currentButton, () => {
        this.scene.state.currentScreen = Screens.CurrentTask;
        this.scene.scene.restart(this.scene.state);
      });
    }

    if (currentScreen !== Screens.DoneList) {
      Utils.clickButton(this.scene, this.listButton, () => {
        this.scene.state.currentScreen = Screens.DoneList;
        this.scene.scene.restart(this.scene.state);
      });
    }
  }
};
