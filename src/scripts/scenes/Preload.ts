import { State } from "../types";

export default class Preload extends Phaser.Scene {
  public state: State;

  constructor() {
    super('Preload');
  }

  public init(state: State) {
    this.state = state;
  }

  public preload(): void {
    this.preloadAssets();
  }

  private preloadAssets(): void {

  }

  public create(): void {
    this.scene.stop();
    this.scene.start('Start', this.state);
  }
};
