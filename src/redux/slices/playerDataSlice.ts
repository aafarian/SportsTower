import { createSlice } from '@reduxjs/toolkit';

interface Pick { projectionId: string, name: string, proj: string[] }

export interface PlayerDataState {
  projections: Pick[]
  selectedProjections: any
}

const initialState: PlayerDataState = {
  projections: [],
  selectedProjections: {},
};

export const playerDataSlice = createSlice({
  name: 'playerData',
  initialState,
  reducers: {
    populate: (state, action: any) => {
      console.log('sportstower:debug:populating in redux');
      state.projections = action.payload;
    },
    playerClicked: (state, action: any) => {
      console.log('sportstower:debug:pushing player in redux', action.payload);
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!state.selectedProjections[action.payload.projectionId]) {
        state.selectedProjections[action.payload.projectionId] = action.payload;
      }
    },
  }
});

// Action creators are generated for each case reducer function
export const { playerClicked, populate } = playerDataSlice.actions;

export default playerDataSlice.reducer;
