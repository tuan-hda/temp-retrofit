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
};

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    changeTemp: (state, action) => {
      const { type, value } = action.payload;
      if (type === 'left') {
        state.leftTemp += value;
      } else {
        state.rightTemp += value;
      }
    },
  },
});

export const { changeTemp } = stateSlice.actions;
export default stateSlice.reducer;
