import { combineReducers, configureStore } from '@reduxjs/toolkit';
import stateReducer from './stateSlice';

const store = configureStore({
  reducer: combineReducers({
    state: stateReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
