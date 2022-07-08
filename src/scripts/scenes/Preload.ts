import { State } from "../types";
const acceptButton = require('../../assets/images/accept-button.png');
const activeCurrent = require('../../assets/images/active-current.png');
const activeDeferrer = require('../../assets/images/active-deferrer.png');
const activeList = require('../../assets/images/active-list.png');
const activeShare = require('../../assets/images/active-share.png');
const backButton = require('../../assets/images/back-button.png');
const checkbox = require('../../assets/images/checkbox.png');
const city1 = require('../../assets/images/city-1.png');
const city2 = require('../../assets/images/city-2.png');
const cityNote = require('../../assets/images/city-note.png');
const deferrerBg = require('../../assets/images/deferrer-bg.png');
const deferrerButton = require('../../assets/images/deferrer-button.png');
const doneButton = require('../../assets/images/done-button.png');
const deferrerEmpty = require('../../assets/images/deferrer-empty.png');
const deferrerTutorial = require('../../assets/images/deferrer-tutorial.png');
const disableCurrent = require('../../assets/images/disable-current.png');
const disableDeferrer = require('../../assets/images/disable-deferrer.png');
const disableList = require('../../assets/images/disable-list.png');
const doneListBg = require('../../assets/images/done-list-bg.png');
const emptyListNote = require('../../assets/images/empty-list-note.png');
const greenSquare = require('../../assets/images/green-square.png');
const listBg = require('../../assets/images/list-bg.png');
const navBg = require('../../assets/images/nav-bg.png');
const noButton = require('../../assets/images/no-button.png');
const yesButton = require('../../assets/images/yes-button.png');
const pinkSquare = require('../../assets/images/pink-square.png');
const startButton = require('../../assets/images/start-button.png');
const storyButton = require('../../assets/images/story-button.png');
const taskGreen = require('../../assets/images/task-green.png');
const taskPink = require('../../assets/images/task-pink.png');
const tutorial1 = require('../../assets/images/tutorial-1.png');
const tutorial2 = require('../../assets/images/tutorial-2.png');
const tutorial3 = require('../../assets/images/tutorial-3.png');

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
    this.load.image('accept-button', acceptButton);
    this.load.image('active-current', activeCurrent);
    this.load.image('active-deferrer', activeDeferrer);
    this.load.image('active-list', activeList);
    this.load.image('active-share', activeShare);
    this.load.image('back-button', backButton);
    this.load.image('checkbox', checkbox);
    this.load.image('city-1', city1);
    this.load.image('city-2', city2);
    this.load.image('city-note', cityNote);
    this.load.image('deferrer-bg', deferrerBg);
    this.load.image('deferrer-button', deferrerButton);
    this.load.image('done-button', doneButton);
    this.load.image('deferrer-empty', deferrerEmpty);
    this.load.image('deferrer-tutorial', deferrerTutorial);
    this.load.image('disable-current', disableCurrent);
    this.load.image('disable-deferrer', disableDeferrer);
    this.load.image('disable-list', disableList);
    this.load.image('done-list-bg', doneListBg);
    this.load.image('empty-list-note', emptyListNote);
    this.load.image('green-square', greenSquare);
    this.load.image('list-bg', listBg);
    this.load.image('nav-bg', navBg);
    this.load.image('no-button', noButton);
    this.load.image('yes-button', yesButton);
    this.load.image('pink-square', pinkSquare);
    this.load.image('start-button', startButton);
    this.load.image('story-button', storyButton);
    this.load.image('task-green', taskGreen);
    this.load.image('task-pink', taskPink);
    this.load.image('tutorial-1', tutorial1);
    this.load.image('tutorial-2', tutorial2);
    this.load.image('tutorial-3', tutorial3);
  }

  public create(): void {
    this.scene.stop();
    this.scene.start('Start', this.state);
  }
};
