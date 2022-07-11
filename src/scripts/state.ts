import { Cities, Screens, State } from './types';

const state: State = {
  vkId: 0,
  currentDay: 0,
  city: Cities.None,
  deferred: [],
  answered: [],
  currentScreen: Screens.CurrentTask,
};

export default state;