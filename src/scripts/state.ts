import { Cities, Screens, State } from './types';

const state: State = {
  vkId: 0,
  currentDay: 0,
  city: Cities.None,
  deferred: [],
  answered: [],
  currentScreen: Screens.CurrentTask,
  timeToNewDay: 86400000,
};

export default state;