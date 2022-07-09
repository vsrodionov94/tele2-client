import SetCityScreen from '../components/SetCityScreen';
import { Cities, State } from '../types';

export default class Game extends Phaser.Scene {
  public state: State;

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
    }

    if (process.env.DEV) this.createDebugZone();
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
};
