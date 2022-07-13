import DeferrerScreen from '../components/DeferrerScreen';
import Navigation from '../components/Navigation';
import SetCityScreen from '../components/SetCityScreen';
import { Cities, Screens, State } from '../types';
import TaskScreen from './../components/TaskScreen';
import ListScreen from './../components/ListScreen';
import api from './../libs/Api';

export default class Game extends Phaser.Scene {
  public state: State;
  private taskScreen: TaskScreen;
  private newDay: boolean;
  
  constructor() {
    super('Game');
  }

  public init(state: State): void {
    this.state = state;
  }

  public create(): void {
    if (this.state.city === Cities.None) {
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
      if (this.newDay) return;
      this.newDay = true;
      api.updateNewDay({ vkId: this.state.vkId }).then(res => {
        this.state.timeToNewDay = res.timeToNewDay * 1000;
        this.state.currentDay = res.currentDay;
        this.scene.restart(this.state);
      });
    }
    this.state.timeToNewDay = Math.round(this.state.timeToNewDay - delta);
  }

  public timer(num: number): string {
    let hours: number | string;
    let minutes: number | string;
  
    if (num > 3600) {
      hours = Math.floor(num / 3600);
      minutes = Math.floor((num % 3600) / 60);
    } else if (num > 60) {
      hours = '00';
      minutes = Math.floor(num / 60);
    } else {
      hours = '00';
      minutes = '00';
    }
    
    hours = String(hours);
    minutes = String(minutes);

    if (hours.length === 1) hours = '0' + hours + ':';
    else hours = hours + ':';

    if (minutes.length === 1) minutes = '0' + minutes;
  
    let time: string = hours + minutes;
    return time;
  }
};
