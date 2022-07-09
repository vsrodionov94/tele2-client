import { Cities, State } from '../types';
import Utils from './../libs/Utils';

export default class Start extends Phaser.Scene {
  public state: State;
  public tutorial: integer;

  constructor() {
    super('Start');
  }

  public init(state: State) {
    this.state = state;
    if (this.state.city === Cities.None) {
      this.tutorial = 1;
    } else {
      this.scene.start('Game', this.state);
    }
  }

  public create(): void {
    this.createTutorialStep();
  }

  private createTutorialStep(): void {
    if (this.tutorial >= 4) this.scene.start('Game', this.state);
    this.add.sprite(0, 0, `tutorial-${this.tutorial}`).setOrigin(0);
    const { centerX, centerY } = this.cameras.main;
    const button = this.add.sprite(centerX, centerY + 450, this.tutorial != 3 ? 'accept-button' : 'start-button');
    Utils.clickButton(this, button, () => {
      this.tutorial += 1;
      this.createTutorialStep();
    })
  }
}