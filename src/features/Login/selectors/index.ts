import { createSelector } from 'reselect';
import type { RootState } from '../../../store/reducers';

const globalState = (state: RootState) => state.global;

export const getAuthenticated = createSelector(
  globalState,
  (global) => global.isAuthenticated
);
