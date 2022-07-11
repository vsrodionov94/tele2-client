import { Fonts } from '../types';
import Game from './../scenes/Game';
import data from './../data';
import Utils from './../libs/Utils';

export default class TaskScreen {
  private scene: Game;
  private timer: Phaser.GameObjects.Text;

  constructor(scene: Game) {
    this.scene = scene;
    this.create();
  }

  private create() {
    const { city, currentDay } = this.scene.state;

    this.scene.add.sprite(0, 0, 'task-green').setOrigin(0);
    this.scene.add.text(25, 220, 'ДЕНЬ ЛЕТА: ' + (44 + currentDay), {
      fontFamily: Fonts.Standardstencil,
      fontSize: '60px',
    }).setAngle(-5);
    const dayData = data[city][currentDay];
    this.scene.add.text(30, 300, dayData.title, {
      fontFamily: Fonts.Standardstencil,
      fontSize: '35px',
      color: '#000000',
      wordWrap: { width: 520 },
    }).setAngle(-5);
    const text = this.scene.add.text(50, 520, dayData.text, {
      fontFamily: Fonts.Tele2DisplaySerif_Regular,
      fontSize: '25px',
      color: dayData.link ? '#ffffff' : '#000000',
      wordWrap: { width: 520 },
    }).setAngle(-5);

    this.timer = this.scene.add.text(460, 585, '22:30', {
      fontFamily: Fonts.Standardstencil,
      fontSize: '70px',
      color: '#ffffff',
    }).setAngle(-5).setOrigin(0.5);

    if (dayData.link) {
      Utils.click(text, () => window.open(dayData.link, '_blank'));
    }

    const doneButton = this.scene.add.sprite(this.scene.cameras.main.width + 50, 900, 'done-button').setOrigin(1, 0.5);
    const deferrerButton = this.scene.add.sprite(0 - 50, 900, 'deferrer-button').setOrigin(0, 0.5);

    Utils.clickButton(this.scene, doneButton, () => {
      this.onButtonClick(true);
    });

    Utils.clickButton(this.scene, deferrerButton, () => {
      this.onButtonClick(false);
    });
  }

  private onButtonClick(done: boolean) {
    if (done) {
      this.scene.state.answered.push(this.scene.state.currentDay);
      this.scene.scene.restart(this.scene.state);
    } else {
      this.scene.state.deferred.push(this.scene.state.currentDay);
      this.scene.scene.restart(this.scene.state);
    }
  }

  public update() {
    this.timer.setText(this.scene.timer(this.scene.state.timeToNewDay / 1000));
  }
};
