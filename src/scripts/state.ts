import { Cities, Modals, State } from './types';

const state: State = {
  vkId: 0,
  currentDay: 0,
  city: Cities.None,
  deferred: [],
  answered: []
};

export default state;