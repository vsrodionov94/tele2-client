import {
  CheckUserRequest,
  CheckUserResponse,
  SetCityRequest,
  SetCityResponse,
  AnswerTaskRequest,
  DeferTaskRequest,
  AnswerTaskResponse,
  DeferTaskResponse,
  OpenListRequest,
  UpdateNewDayRequest,
  UpdateNewDayResponse,
} from "../types";


class Api {
  private url: string;
  private headers: { "Content-type": string; };

  constructor(config: { url: string, headers: { "Content-type": string } }) {
    this.url = config.url;
    this.headers = config.headers;
  }

  private handleResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  public checkUser(data: CheckUserRequest): Promise<CheckUserResponse> {
    return fetch(`${this.url}/checkUser`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then(this.handleResponseData);
  }

  public answerTask(data: AnswerTaskRequest): Promise<AnswerTaskResponse> {
    return fetch(`${this.url}/answerTask`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then(this.handleResponseData);
  }

  public deferTask(data: DeferTaskRequest): Promise<DeferTaskResponse> {
    return fetch(`${this.url}/deferTask`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then(this.handleResponseData);
  }

  public setCity(data: SetCityRequest): Promise<SetCityResponse> {
    return fetch(`${this.url}/setCity`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then(this.handleResponseData);
  }
  
  public openList(data: OpenListRequest): Promise<void> {
    return fetch(`${this.url}/openList`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then(this.handleResponseData);
  }

  public updateNewDay(data: UpdateNewDayRequest): Promise<UpdateNewDayResponse> {
    return fetch(`${this.url}/updateNewDay`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then(this.handleResponseData);
  }
  
}

const api = new Api({
  url: process.env.API,
  headers: {
    "Content-type": "application/json",
  },
});

export default api;