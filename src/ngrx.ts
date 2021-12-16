import { createAction, createReducer, on, props } from "@ngrx/store";

enum ActionTypes {
  SetGame = 'SetGame',
  SetPlayers = 'SetPlayers',
  SetTeams = 'SetTeams',
}

export const setGame = createAction(ActionTypes.SetGame, props<{payload: any}>());

export const setPlayers = createAction(ActionTypes.SetPlayers, props<{payload: any}>());

export const setTeams = createAction(ActionTypes.SetTeams, props<{payload: any}>());

const INITIAL_STATE = {
  game: {},
  players: [],
  teams: []
}

export const reducer = createReducer(
  INITIAL_STATE,
  on(setGame, (state, {payload}) => ({
    ...state, game: payload
  })),
  on(setPlayers, (state, {payload}) => ({
    ...state, players: payload
  })),
  on(setTeams, (state, {payload}) => ({
    ...state, teams: payload
  }))
)
