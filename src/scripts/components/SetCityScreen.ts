import { Cities } from '../types';
import Game from './../scenes/Game';
import Utils from './../libs/Utils';

export default class SetCityScreen {
  private scene: Game;
  private mainBg: Phaser.GameObjects.Sprite;
  private blurBg: Phaser.GameObjects.Sprite;
  private selectedCity: Cities;

  constructor(scene: Game) {
    this.scene = scene;
    this.createElements();
  }

  private createElements() {
    this.mainBg = this.scene.add.sprite(0, 0, 'city-1').setOrigin(0);
    this.blurBg = this.scene.add.sprite(0, 0, 'city-2').setOrigin(0).setVisible(false);
    const { centerX } = this.scene.cameras.main;
    this.createZone(centerX, 450, Cities.SPB);
    
  }
  
  private createZone(x: number, y: number, city: Cities): Phaser.GameObjects.Zone {
    
    const zone = this.scene.add.zone(x, y, 450, 100).setDropZone(undefined, () => {}).setAngle(15);
    Utils.click(zone, () => {
      console.log(city);
    })
    return null;
  }

  public Destroy() {
    this.mainBg.destroy();
    this.blurBg.destroy();
  }

};
