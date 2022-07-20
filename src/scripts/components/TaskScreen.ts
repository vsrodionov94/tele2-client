import { Fonts } from '../types';
import Game from './../scenes/Game';
import data from './../data';
import Utils from './../libs/Utils';
import api from './../libs/Api';

export default class TaskScreen {
  private scene: Game;

  constructor(scene: Game) {
    this.scene = scene;
    this.create();
  }

  private create() {
    const { city, currentDay } = this.scene.state;
    const { centerX, centerY } = this.scene.cameras.main;
    const dayData = data[city][currentDay];
    if (!dayData) return;
    this.scene.add.sprite(centerX, centerY, dayData.image);
    this.scene.add.sprite(0, 0, currentDay % 2 === 0 ? 'task-green' : 'task-pink').setOrigin(0);
    this.scene.add.text(60 + 25, 220 + 30, 'ДЕНЬ ЛЕТА: ' + (44 + currentDay), {
      fontFamily: Fonts.Standardstencil,
      fontSize: '60px',
    }).setAngle(-5);
    this.scene.add.text(60 + 30, 300 + 30, dayData.title, {
      fontFamily: Fonts.Standardstencil,
      fontSize: '35px',
      color: '#000000',
      wordWrap: { width: 520 },
    }).setAngle(-5);
    const text = this.scene.add.text(60 + 50, 520 + 30, dayData.text, {
      fontFamily: Fonts.Tele2DisplaySerif_Regular,
      fontSize: '25px',
      color: dayData.link ? '#ffffff' : '#000000',
      wordWrap: { width: 520 },
    }).setAngle(-5);

    if (dayData.link) {
      const graphics = this.scene.add.graphics();
      graphics.lineStyle(2, 0xffffff, 1);
      graphics.lineBetween(text.getBottomLeft().x, text.getBottomLeft().y, text.getBottomRight().x, text.getBottomRight().y);

      Utils.click(text, () => {
        const a = document.createElement('a');
        a.setAttribute('target', '_blank');
        document.body.appendChild(a);
        a.href = dayData.link;
        a.click();
        document.body.removeChild(a);
      });
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
      if (process.env.DEV) {
        this.scene.state.answered.push(this.scene.state.currentDay);
        this.scene.state.currentDay += 1;
        this.scene.scene.restart(this.scene.state);
      } else {
        api.answerTask({ vkId: this.scene.state.vkId, taskId: this.scene.state.currentDay }).then(res => {
          if (res.error) return;
          this.scene.state.answered.push(this.scene.state.currentDay);
          this.scene.scene.restart(this.scene.state);
        });
      }
    } else {
      if (process.env.DEV) {
        this.scene.state.deferred.push(this.scene.state.currentDay);
        this.scene.state.currentDay += 1;
        this.scene.scene.restart(this.scene.state);
      } else {
        api.deferTask({ vkId: this.scene.state.vkId, taskId: this.scene.state.currentDay }).then(res => {
          if (res.error) return;
          this.scene.state.deferred.push(this.scene.state.currentDay);
          this.scene.scene.restart(this.scene.state);
        });
      }
    }
  }
};
