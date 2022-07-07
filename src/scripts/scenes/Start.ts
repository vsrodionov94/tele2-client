import { State } from '../types';

export default class Start extends Phaser.Scene {
  public state: State;

  constructor() {
    super('Start');
  }

  public init(state: State) {
    this.state = state;
  }

  public create(): void {

  }
}