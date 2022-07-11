import Game from './../scenes/Game';

export default class DeferrerScreen {
  private scene: Game;

  constructor(scene: Game) {
    this.scene = scene;
    this.create();
  }

  private create() {
    this.scene.add.sprite(0, 0, 'deferrer-bg').setOrigin(0);
    if (this.scene.state.deferred.length === 0) {
      const { centerX, centerY } = this.scene.cameras.main;
      this.scene.add.sprite(centerX, centerY + 100, 'deferrer-empty');
    } else {
      
    }
  }
};
