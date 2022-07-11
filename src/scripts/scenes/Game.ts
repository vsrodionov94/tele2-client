import DeferrerScreen from '../components/DeferrerScreen';
import Navigation from '../components/Navigation';
import SetCityScreen from '../components/SetCityScreen';
import { Cities, Screens, State } from '../types';
import TaskScreen from './../components/TaskScreen';
import ListScreen from './../components/ListScreen';

export default class Game extends Phaser.Scene {
  public state: State;
  private taskScreen: TaskScreen;
  
  constructor() {
    super('Game');
  }

  public init(state: State): void {
    this.state = state;
  }

  public create(): void {
    if (this.state.city === Cities.None) {
      console.log(1);
      new SetCityScreen(this);
    } else {
      if (this.state.currentScreen === Screens.CurrentTask) {
        const checkAnswered = this.state.answered.some(el => el === this.state.currentDay);
        const checkDeferrer = this.state.deferred.some(el => el === this.state.currentDay);
  
        if (checkAnswered) {
          this.add.sprite(0, 0, 'task-done').setOrigin(0);
        } else if (checkDeferrer) {
          this.add.sprite(0, 0, 'task-deferrer').setOrigin(0);
        } else {
          this.taskScreen = new TaskScreen(this);
        }
      } else if (this.state.currentScreen === Screens.Deferrer) {
        new DeferrerScreen(this);
      } else if (this.state.currentScreen === Screens.DoneList) {
        new ListScreen(this);
      }
      new Navigation(this);
    }

    if (process.env.DEV && false) this.createDebugZone();
  }

  private createDebugZone(): void {
    let color = 0xff00ff;
    this.children.list.forEach(el => {
      if (el.type === 'Zone') {
        const zone = el as Phaser.GameObjects.Zone;
        this.createZoneGraphics(zone, color);
        color += 0x000050;
      }
    })
  }

  private createZoneGraphics(zone: Phaser.GameObjects.Zone, color: number): void {
    const { height, width } = zone.input.hitArea;
    const { x, y } = zone;
    const graphics: Phaser.GameObjects.Graphics = this.add.graphics();
    graphics.lineStyle(5, color);
    graphics.strokeRect(x - width / 2, y - height / 2, width, height);
  }

  public update(time: number, delta: number) {
    this.updateTime(delta);
    this.taskScreen?.update();
  }

  private updateTime(delta: number) {
    if (this.state.timeToNewDay <= 0) {
      this.state.timeToNewDay = 86400000;
      this.state.currentDay += 1;
      this.scene.restart(this.state);
    }
    this.state.timeToNewDay -= delta;
  }

  public timer(num: number): string {
    let hours: number | string;
    let minutes: number | string;
    let seconds: number | string;
  
    if (num > 3600) {
      hours = Math.floor(num / 3600);
      minutes = Math.floor((num % 3600) / 60);
      seconds = Math.floor(num % 60);
    } else if (num > 60) {
      hours = '';
      minutes = Math.floor(num / 60);
      seconds = Math.floor(num % 60);
    } else {
      hours = '';
      minutes = '00';
      seconds = num;
    }
    
    hours = String(hours);
    minutes = String(minutes);
  
    if (hours.length !== 0) hours = hours + ':';
    if (minutes.length === 1) minutes = '0' + minutes;
  
    let time: string = hours + minutes;
    return time;
  }
};
