import { createSlice } from '@reduxjs/toolkit';

import type { CardData, PlayerData } from '../../components/index.d';

export interface PlayerDataState {
  projections: PlayerData[]
  allSelectedProjections: Record<string, CardData>
}

const initialState: PlayerDataState = {
  projections: [],
  allSelectedProjections: {},
};

export const playerDataSlice = createSlice({
  name: 'playerData',
  initialState,
  reducers: {
    populate: (state, action) => {
      console.log('sportstower:debug:populating in redux');
      state.projections = action.payload;
    },
    playerAdded: (state, action) => {
      console.log('sportstower:debug:pushing player in redux', action.payload);
      state.allSelectedProjections[action.payload.projectionId] ??= action.payload;
    },
    playerRemoved: (state, action) => {
      console.log('sportstower:debug:pulling player in redux', action.payload);
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete state.allSelectedProjections[action.payload];
    }
  }
});

// Action creators are generated for each case reducer function
export const { playerAdded, playerRemoved, populate } = playerDataSlice.actions;

export default playerDataSlice.reducer;
