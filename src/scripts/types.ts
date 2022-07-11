type CheckUserRequest = BasicRequest;
type OpenListRequest = BasicRequest;

type CheckUserResponse = {
  timeToNewDay: number;
  currentDay: integer;
  city: Cities;
  deferred: Array<integer>;
  answered: Array<integer>;
};

type SetCityRequest = {
  vkId: number;
  city: integer;
};

type AnswerTaskRequest = {
  vkId: number;
  taskId: integer;
};

type DeferTaskRequest = {
  vkId: number;
  taskId: integer;
};

type UpdateNewDayRequest = BasicRequest;
type UpdateNewDayResponse = {
  timeToNewDay: number;
  currentDay: integer;
};

type SetCityResponse = { error: boolean, currentDay: number };
type AnswerTaskResponse = BasicResponse;
type DeferTaskResponse = BasicResponse;

type BasicRequest = { vkId: number };
type BasicResponse = { error: boolean };

enum Cities {
  None,
  SPB,
  Vladivostok,
  Irkutsk,
  Kazan,
  Izhevsk,
  NN,
  Saratov,
  Volgograd,
  Another,
};

type TaskType = {
  title: string;
  text: string;
  link?: string;
  image: string;
};

type State = {
  vkId: number;
  currentDay: integer;
  city: Cities;
  deferred: Array<integer>;
  answered: Array<integer>;
  currentScreen: Screens;
  timeToNewDay: number;
};

enum Screens {
  None,
  CurrentTask,
  Deferrer,
  DoneList
};

enum Fonts {
  Standardstencil = 'Standardstencil',
  Tele2DisplaySerif_Bold = 'Tele2DisplaySerif_Bold',
  Tele2DisplaySerif_Regular = 'Tele2DisplaySerif_Regular',
};

export {
  CheckUserRequest,
  CheckUserResponse,
  SetCityRequest,
  SetCityResponse,
  AnswerTaskRequest,
  DeferTaskRequest,
  AnswerTaskResponse,
  DeferTaskResponse,
  OpenListRequest,
  State,
  Screens,
  Fonts,
  Cities,
  TaskType,
  UpdateNewDayRequest,
  UpdateNewDayResponse
};