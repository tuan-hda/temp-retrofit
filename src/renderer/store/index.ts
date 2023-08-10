import { combineReducers, configureStore } from '@reduxjs/toolkit';
import stateReducer from './stateSlice';

const store = configureStore({
  reducer: combineReducers({
    state: stateReducer,
  }),
});

export default store;
