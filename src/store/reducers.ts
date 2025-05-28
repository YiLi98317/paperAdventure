import { combineReducers } from '@reduxjs/toolkit';
import { reducer as globalReducer } from '../features/Login/reducer';

const combinedReducers = combineReducers({
  global: globalReducer,
});

export default combinedReducers;
export type RootState = ReturnType<typeof combinedReducers>;
