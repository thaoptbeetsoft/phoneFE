import {
  CallEffect,
  delay,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";

import {
  DOWN,
  ISnakeCoord,
  LEFT,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  RESET,
  RIGHT,
  setDisDirection,
  STOP_GAME,
  UP,
} from "./Snake";

export function* moveSaga(params: {
  type: string, payload: ISnakeCoord
})
  : Generator<
    | PutEffect<{ type: string; payload: ISnakeCoord }>
    | PutEffect<{ type: string; payload: string }>
    | CallEffect<true>
  > {
  while (params.type !== RESET && params.type !== STOP_GAME) {
    yield put({
      type: params.type.split("_")[1],
      payload: params.payload
    });
    switch (params.type.split("_")[1]) {
      case RIGHT: yield put(setDisDirection(LEFT));
        break;

      case LEFT:
        yield put (setDisDirection(RIGHT));
        break;
      case DOWN:
        yield put (setDisDirection(UP));
        break;
      case UP:
        yield put(setDisDirection(DOWN));
        break;     
    }
    yield delay(100);
  }
}
function* watcherSagas(){
yield takeLatest(
  [MOVE_DOWN,MOVE_LEFT,MOVE_RIGHT,MOVE_UP, STOP_GAME, RESET],
  moveSaga
);
}
export default watcherSagas;