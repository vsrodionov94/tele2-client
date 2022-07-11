import TaskData from '../data';
import Scrolling, { IScrollingOptions } from '../libs/Scrolling';
import { Fonts, TaskType } from '../types';
import Game from './../scenes/Game';
import Utils from './../libs/Utils';

export default class ListScreen {
  private scene: Game;
  public height: number;
  public scrollHeight: number;
  public windowHeight: number;
  public windowWidth: number;
  public scrolling: Scrolling;

  constructor(scene: Game) {
    this.scene = scene;
    this.scrollHeight = Number(this.scene.game.config.height) - 50;
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
    this.scene.add.sprite(0, 0, 'list-bg').setOrigin(0);
    if (this.scene.state.answered.length === 0) {
      const { centerX, centerY } = this.scene.cameras.main;
      this.scene.add.sprite(centerX, centerY + 100, 'empty-list-note');
    } else {
      this.scene.state.answered.forEach(element => {
        this.createTask(element);
      });
    }
  }

  private createTask(id: number) {
    const dayData = TaskData[this.scene.state.city][id];
    const padding = 35;
    const x = 20;
    const y = this.windowHeight + this.scrollHeight + padding;
    const square = this.scene.add.sprite(x, y, 'green-square');

    const text = this.scene.add.text(x + 30, y, dayData.title, {
      fontFamily: Fonts.Tele2DisplaySerif_Regular,
      wordWrap: { width: 450 }, 
      fontSize: '20px',
    });

    this.scrollHeight += text.displayHeight + padding;
    this.scrolling.bottom = this.scrollHeight;
  }
};
