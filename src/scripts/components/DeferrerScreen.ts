import Scrolling, { IScrollingOptions } from '../libs/Scrolling';
import { Fonts, TaskType } from '../types';
import Game from './../scenes/Game';
import TaskData from '../data';
import Utils from '../libs/Utils';

export default class DeferrerScreen {
  private scene: Game;
  public height: number;
  public scrollHeight: number;
  public windowHeight: number;
  public windowWidth: number;
  public scrolling: Scrolling;

  constructor(scene: Game) {
    this.scene = scene;
    this.scrollHeight = Number(this.scene.game.config.height);
    this.windowHeight = 670;
    this.windowWidth = 591;
    
    this.initScrolling();
    this.create();
  }

  private initScrolling(): void {
    this.height = this.scrollHeight + this.windowHeight - 150;
    let y: number = this.scene.cameras.main.centerY - 165;
    const cameraOptions: IScrollingOptions = {
      x: 40,
      y: y,
      width: this.windowWidth,
      height: this.windowHeight,
      wheel: true,
      top: this.height
    };

    this.scrolling = new Scrolling(this.scene, cameraOptions);
    this.scene.input.on('pointerup', (): void => {
      this.scrolling.enabled = true;
      this.scrolling.wheel = true;
    });
  }

  private create() {
    this.scene.add.sprite(0, 0, 'deferrer-bg').setOrigin(0);
    const { centerX, centerY } = this.scene.cameras.main;
    if (this.scene.state.deferred.length === 0) {
      this.scene.add.sprite(centerX, centerY + 100, 'deferrer-empty');
    } else {
      const padding = 35;
      const y = this.windowHeight + this.scrollHeight + padding;
      const tutorial = this.scene.add.sprite(centerX - 40, y, 'deferrer-tutorial');
      this.scrollHeight += tutorial.displayHeight + padding;
      this.scrolling.bottom = this.scrollHeight;

      this.scene.state.deferred.forEach(element => {
        this.createTask(element);
      });
    }
  }


  private createTask(id: number) {
    const dayData = TaskData[this.scene.state.city][id];
    const padding = 35;
    const x = 20;
    const y = this.windowHeight + this.scrollHeight + padding;
    const square = this.scene.add.sprite(x, y, 'pink-square');
    Utils.clickButton(this.scene, square, () => {
      this.scene.state.deferred = this.scene.state.deferred.filter(el => el !== id);
      this.scene.state.answered.push(id);
      this.scene.scene.restart(this.scene.state);
    });
    const text = this.scene.add.text(x + 30, y, dayData.title, {
      fontFamily: Fonts.Tele2DisplaySerif_Regular,
      wordWrap: { width: 450 }, 
      fontSize: '20px',
    });

    this.scrollHeight += text.displayHeight + padding;
    this.scrolling.bottom = this.scrollHeight;
  }
};
