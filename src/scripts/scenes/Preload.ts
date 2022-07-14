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
const blackPixel = require('../../assets/images/black-pixel.png');
const taskDeferrer = require('../../assets/images/task-deferrer.png');
const taskDone = require('../../assets/images/task-done.png');
const artkvartal = require('../../assets/images/backgrounds/artkvartal.png');
const attraction = require('../../assets/images/backgrounds/attraction.png');
const beach = require('../../assets/images/backgrounds/beach.png');
const bed = require('../../assets/images/backgrounds/bed.png');
const bookcoworking = require('../../assets/images/backgrounds/bookcoworking.png');
const bookpark = require('../../assets/images/backgrounds/bookpark.png');
const bridge = require('../../assets/images/backgrounds/bridge.png');
const brunch = require('../../assets/images/backgrounds/brunch.png');
const bubbles = require('../../assets/images/backgrounds/bubbles.png');
const bukhta = require('../../assets/images/backgrounds/bukhta.png');
const bukhtawalk = require('../../assets/images/backgrounds/bukhtawalk.png');
const buterbrodik = require('../../assets/images/backgrounds/buterbrodik.png');
const chackchack = require('../../assets/images/backgrounds/chackchack.png');
const chaynaya = require('../../assets/images/backgrounds/chaynaya.png');
const chernoyeozero = require('../../assets/images/backgrounds/chernoyeozero.png');
const cherry = require('../../assets/images/backgrounds/cherry.png');
const children = require('../../assets/images/backgrounds/children.png');
const chkalov = require('../../assets/images/backgrounds/chkalov.png');
const clay = require('../../assets/images/backgrounds/clay.png');
const cleaning = require('../../assets/images/backgrounds/cleaning.png');
const cocktail = require('../../assets/images/backgrounds/cocktail.png');
const cottoncandy = require('../../assets/images/backgrounds/cottoncandy.png');
const coworking = require('../../assets/images/backgrounds/coworking.png');
const djset = require('../../assets/images/backgrounds/djset.png');
const echpochmak = require('../../assets/images/backgrounds/echpochmak.png');
const fire = require('../../assets/images/backgrounds/fire.png');
const fruitsalad = require('../../assets/images/backgrounds/fruitsalad.png');
const gallery = require('../../assets/images/backgrounds/gallery.png');
const giraffe = require('../../assets/images/backgrounds/giraffe.png');
const goldfish = require('../../assets/images/backgrounds/goldfish.png');
const golubi = require('../../assets/images/backgrounds/golubi.png');
const interior = require('../../assets/images/backgrounds/interior.png');
const jump = require('../../assets/images/backgrounds/jump.png');
const jungle = require('../../assets/images/backgrounds/jungle.png');
const kanatka = require('../../assets/images/backgrounds/kanatka.png');
const kart = require('../../assets/images/backgrounds/kart.png');
const kazanwalk = require('../../assets/images/backgrounds/kazanwalk.png');
const kinoparkovka = require('../../assets/images/backgrounds/kinoparkovka.png');
const kinoparkovka1 = require('../../assets/images/backgrounds/kinoparkovka1.png');
const kotocafe = require('../../assets/images/backgrounds/kotocafe.png');
const krugobaikal = require('../../assets/images/backgrounds/krugobaikal.png');
const lectority = require('../../assets/images/backgrounds/lectority.png');
const literaturegirl = require('../../assets/images/backgrounds/literaturegirl.png');
const literaturestairs = require('../../assets/images/backgrounds/literaturestairs.png');
const mayak = require('../../assets/images/backgrounds/mayak.png');
const mystic = require('../../assets/images/backgrounds/mystic.png');
const neobichnoezdanie = require('../../assets/images/backgrounds/neobichnoezdanie.png');
const nizhniyyoga = require('../../assets/images/backgrounds/nizhniyyoga.png');
const onlinepark = require('../../assets/images/backgrounds/onlinepark.png');
const parkrun = require('../../assets/images/backgrounds/parkrun.png');
const partyhome = require('../../assets/images/backgrounds/partyhome.png');
const peski = require('../../assets/images/backgrounds/peski.png');
const photowalk = require('../../assets/images/backgrounds/photowalk.png');
const piknik = require('../../assets/images/backgrounds/piknik.png');
const pinkmovie = require('../../assets/images/backgrounds/pinkmovie.png');
const pishka = require('../../assets/images/backgrounds/pishka.png');
const pizza = require('../../assets/images/backgrounds/pizza.png');
const planetariy = require('../../assets/images/backgrounds/planetariy.png');
const poetry = require('../../assets/images/backgrounds/poetry.png');
const pokhod = require('../../assets/images/backgrounds/pokhod.png');
const pool = require('../../assets/images/backgrounds/pool.png');
const redhat = require('../../assets/images/backgrounds/redhat.png');
const rollerskates = require('../../assets/images/backgrounds/rollerskates.png');
const running = require('../../assets/images/backgrounds/running.png');
const saintp = require('../../assets/images/backgrounds/saintp.png');
const saratovphotowalk = require('../../assets/images/backgrounds/saratovphotowalk.png');
const saratovyoga = require('../../assets/images/backgrounds/saratovyoga.png');
const sdelanovitalii = require('../../assets/images/backgrounds/sdelanovitalii.png');
const shashliki = require('../../assets/images/backgrounds/shashliki.png');
const skateboard = require('../../assets/images/backgrounds/skateboard.png');
const sloboda = require('../../assets/images/backgrounds/sloboda.png');
const sosna = require('../../assets/images/backgrounds/sosna.png');
const standup = require('../../assets/images/backgrounds/standup.png');
const streetsinger = require('../../assets/images/backgrounds/streetsinger.png');
const sunrise = require('../../assets/images/backgrounds/sunrise.png');
const sunset = require('../../assets/images/backgrounds/sunset.png');
const sunsetfriends = require('../../assets/images/backgrounds/sunsetfriends.png');
const trenirovka = require('../../assets/images/backgrounds/trenirovka.png');
const tsuyvan = require('../../assets/images/backgrounds/tsuyvan.png');
const tuvefilm = require('../../assets/images/backgrounds/tuvefilm.png');
const veranda = require('../../assets/images/backgrounds/veranda.png');
const vgosti = require('../../assets/images/backgrounds/vgosti.png');
const vladikphotowalk = require('../../assets/images/backgrounds/vladikphotowalk.png');
const volga = require('../../assets/images/backgrounds/volga.png');
const wakeboard = require('../../assets/images/backgrounds/wakeboard.png');
const walkatnight = require('../../assets/images/backgrounds/walkatnight.png');
const walkingmusic = require('../../assets/images/backgrounds/walkingmusic.png');
const watermelon = require('../../assets/images/backgrounds/watermelon.png');
const wink = require('../../assets/images/backgrounds/wink.png');
const yoga2 = require('../../assets/images/backgrounds/yoga2.png');
const yogaroof = require('../../assets/images/backgrounds/yogaroof.png');
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
    this.load.image('black-pixel', blackPixel);
    this.load.image('task-deferrer', taskDeferrer);
    this.load.image('task-done', taskDone);
    this.load.image('artkvartal', artkvartal);
    this.load.image('attraction', attraction);
    this.load.image('beach', beach);
    this.load.image('bed', bed);
    this.load.image('bookcoworking', bookcoworking);
    this.load.image('bookpark', bookpark);
    this.load.image('bridge', bridge);
    this.load.image('brunch', brunch);
    this.load.image('bubbles', bubbles);
    this.load.image('bukhta', bukhta);
    this.load.image('bukhtawalk', bukhtawalk);
    this.load.image('buterbrodik', buterbrodik);
    this.load.image('chackchack', chackchack);
    this.load.image('chaynaya', chaynaya);
    this.load.image('chernoyeozero', chernoyeozero);
    this.load.image('cherry', cherry);
    this.load.image('children', children);
    this.load.image('chkalov', chkalov);
    this.load.image('clay', clay);
    this.load.image('cleaning', cleaning);
    this.load.image('cocktail', cocktail);
    this.load.image('cottoncandy', cottoncandy);
    this.load.image('coworking', coworking);
    this.load.image('djset', djset);
    this.load.image('echpochmak', echpochmak);
    this.load.image('fire', fire);
    this.load.image('fruitsalad', fruitsalad);
    this.load.image('gallery', gallery);
    this.load.image('giraffe', giraffe);
    this.load.image('goldfish', goldfish);
    this.load.image('golubi', golubi);
    this.load.image('interior', interior);
    this.load.image('jump', jump);
    this.load.image('jungle', jungle);
    this.load.image('kanatka', kanatka);
    this.load.image('kart', kart);
    this.load.image('kazanwalk', kazanwalk);
    this.load.image('kinoparkovka', kinoparkovka);
    this.load.image('kinoparkovka1', kinoparkovka1);
    this.load.image('kotocafe', kotocafe);
    this.load.image('krugobaikal', krugobaikal);
    this.load.image('lectority', lectority);
    this.load.image('literaturegirl', literaturegirl);
    this.load.image('literaturestairs', literaturestairs);
    this.load.image('mayak', mayak);
    this.load.image('mystic', mystic);
    this.load.image('neobichnoezdanie', neobichnoezdanie);
    this.load.image('nizhniyyoga', nizhniyyoga);
    this.load.image('onlinepark', onlinepark);
    this.load.image('parkrun', parkrun);
    this.load.image('partyhome', partyhome);
    this.load.image('peski', peski);
    this.load.image('photowalk', photowalk);
    this.load.image('piknik', piknik);
    this.load.image('pinkmovie', pinkmovie);
    this.load.image('pishka', pishka);
    this.load.image('pizza', pizza);
    this.load.image('planetariy', planetariy);
    this.load.image('poetry', poetry);
    this.load.image('pokhod', pokhod);
    this.load.image('pool', pool);
    this.load.image('redhat', redhat);
    this.load.image('rollerskates', rollerskates);
    this.load.image('running', running);
    this.load.image('saintp', saintp);
    this.load.image('saratovphotowalk', saratovphotowalk);
    this.load.image('saratovyoga', saratovyoga);
    this.load.image('sdelanovitalii', sdelanovitalii);
    this.load.image('shashliki', shashliki);
    this.load.image('skateboard', skateboard);
    this.load.image('sloboda', sloboda);
    this.load.image('sosna', sosna);
    this.load.image('standup', standup);
    this.load.image('streetsinger', streetsinger);
    this.load.image('sunrise', sunrise);
    this.load.image('sunset', sunset);
    this.load.image('sunsetfriends', sunsetfriends);
    this.load.image('trenirovka', trenirovka);
    this.load.image('tsuyvan', tsuyvan);
    this.load.image('tuvefilm', tuvefilm);
    this.load.image('veranda', veranda);
    this.load.image('vgosti', vgosti);
    this.load.image('vladikphotowalk', vladikphotowalk);
    this.load.image('volga', volga);
    this.load.image('wakeboard', wakeboard);
    this.load.image('walkatnight', walkatnight);
    this.load.image('walkingmusic', walkingmusic);
    this.load.image('watermelon', watermelon);
    this.load.image('wink', wink);
    this.load.image('yoga2', yoga2);
    this.load.image('yogaroof', yogaroof);
  }

  public create(): void {
    this.scene.stop();
    this.scene.start('Start', this.state);
  }
};
