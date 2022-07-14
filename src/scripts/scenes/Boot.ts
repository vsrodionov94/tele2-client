import * as Webfont from '../libs/Webfonts.js';
import { State } from '../types';
import state from '../state';
import api from '../libs/Api';
import bridge from '@vkontakte/vk-bridge';

export default class BootScene extends Phaser.Scene {
  private fontsReady: boolean;
  private userReady: boolean;
  public state: State;
  
  constructor() {
    super('Boot');
  }

  public init(): void {
    this.state = state;
    bridge.send('VKWebAppInit');
    Webfont.load({
      custom: { families: [
      'Standardstencil',
      'Tele2DisplaySerif_Bold',
      'Tele2DisplaySerif_Regular',
    ] },
      active: () => { this.fontsReady = true },
    });

    this.initUser();
  }

  private initUser(): void {
    if (process.env.DEV && process.env.TEST) {
      this.state.vkId = 1255889
      this.checkUser();
    } else {
      bridge.send('VKWebAppGetUserInfo').then(data => {
        const params = new URLSearchParams(window.location.search);
        if (Number(params.get('vk_are_notifications_enabled')) < 1) {
          bridge.send("VKWebAppAllowNotifications");
        }
        this.state.vkId = data.id;
        this.checkUser();
      });
    }
  }

  private checkUser(): void {
    api.checkUser({ vkId: this.state.vkId })
      .then(data => {
        this.state.currentDay = data.currentDay;
        this.state.timeToNewDay = data.timeToNewDay * 1000;
        this.state.city = data.city;
        this.state.answered = data.answered;
        this.state.deferred = data.deferred;
        if (process.env.DEV) {
          this.state.currentDay = 0;
          this.state.answered = [];
          this.state.deferred = [];
        }
        this.userReady = true;
      });
  }

  public preload (): void {
  }

  public update(): void {
    if (!this.fontsReady) return;
    if (!this.userReady) return;
    this.scene.start('Preload', this.state);
  }
}