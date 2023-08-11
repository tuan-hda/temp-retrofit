import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  battery: 100,
  outTemp: 25,
  signal: 5,
  volume: 100,
  bluetooth: true,
  noti: 12,
  leftTemp: 20,
  rightTemp: 20,
  humidity: 0,
  lux: 0,
};

const TEMP_RANGE = [15, 40];

const isValidTemp = (temp: number) => {
  return temp >= TEMP_RANGE[0] && temp <= TEMP_RANGE[1];
};

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    updateEnvAction: (state, action) => {
      state.outTemp = Math.round(action.payload.outTemp);
      state.humidity = Math.round(action.payload.humidity);
    },
    updateLuxAction: (state, action) => {
      state.lux = Math.round(action.payload);
    },
    changeTempAction: (state, action) => {
      const { type, value } = action.payload;
      if (type === 'left') {
        const newTemp = state.leftTemp + value;
        if (isValidTemp(newTemp)) {
          state.leftTemp = newTemp;
        }
      } else {
        const newTemp = state.rightTemp + value;
        if (isValidTemp(newTemp)) {
          state.rightTemp = newTemp;
        }
      }
    },
  },
});

export const { changeTempAction, updateEnvAction, updateLuxAction } =
  stateSlice.actions;
export default stateSlice.reducer;
