import { createSlice } from "@reduxjs/toolkit";

export const gameRoundSlice = createSlice({
  name: "gameRound",
  initialState: {
    gameRound: 1,
  },
  reducers: {
    nextGameRound: (state) => {
      state.gameRound += 1;
    },
    setGameRound: (state, action) => {
      state.gameRound = action.payload;
    },
  },
});

export const { nextGameRound, setGameRound } = gameRoundSlice.actions;
export default gameRoundSlice.reducer;
