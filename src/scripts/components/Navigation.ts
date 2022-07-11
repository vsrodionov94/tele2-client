import Game from './../scenes/Game';
import { Screens } from '../types';
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
    this.scene.add.sprite(centerX, height, 'nav-bg').setOrigin(0.5, 1);
    const { currentScreen } = this.scene.state;

    this.deferrerButton = this.scene.add.sprite(centerX - 180, height - 70, currentScreen !== Screens.Deferrer ? 'disable-deferrer' : 'active-deferrer');
    this.currentButton = this.scene.add.sprite(centerX, height - 70, currentScreen !== Screens.CurrentTask ? 'disable-current' : 'active-current');
    this.listButton = this.scene.add.sprite(centerX + 180, height - 70, currentScreen !== Screens.DoneList ? 'disable-list' : 'active-list');

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

  private updateState() {
    switch(this.scene.state.currentScreen) {
      case Screens.CurrentTask:
        this.deferrerButton.setInteractive(true);
        this.currentButton.setInteractive(false);
        this.listButton.setInteractive(true);
        break;
      case Screens.Deferrer:
        break;
      case Screens.DoneList:
        break;  
    }
  }
};
