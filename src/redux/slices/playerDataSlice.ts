import { createSlice } from '@reduxjs/toolkit';

import type { PlayerData, Projection } from '../../components/index.d';

export interface PlayerDataState {
  loading: boolean
  projections: Record<string, Projection>
  allSelectedProjections: Record<string, boolean>
  allCategories: Record<string, boolean>
}

const initialState: PlayerDataState = {
  loading: true,
  projections: {},
  allSelectedProjections: {},
  allCategories: {},
};

export const playerDataSlice = createSlice({
  name: 'playerData',
  initialState,
  reducers: {
    populate: (state, action) => {
      console.debug('SportsTower:debug:populating in redux');
      const allProjectionsByProjectionId: Record<string, Projection> = {};
      const allCategories: Record<string, boolean> = {};

      // map through all player data
      action.payload.forEach((player: PlayerData) => {
        const { playerName, playerImage } = player;
        // map through their individual projections, index them by projectionId, save into allProjectionsByProjectionId before replacing state
        player.projections.forEach((projection: Projection) => {
          const { projectionId, category, value } = projection;
          allProjectionsByProjectionId[projectionId] = {
            playerName,
            playerImage,
            projectionId,
            category,
            value,
          };
          // greedily figure out what categories we have so far
          allCategories[category] = true;
        });
      });
      state.projections = allProjectionsByProjectionId;
      state.allCategories = allCategories;
    },
    playerAdded: (state, action) => {
      const { projectionId } = action.payload;
      console.debug('SportsTower:debug:pushing player in redux', action.payload);
      state.allSelectedProjections[projectionId] = true;
    },
    playerRemoved: (state, action) => {
      console.debug('SportsTower:debug:pulling player in redux', action.payload);
      const { projectionId } = action.payload;
      const newState = state.allSelectedProjections;
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete newState[projectionId];
      state.allSelectedProjections = newState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { playerAdded, playerRemoved, populate } = playerDataSlice.actions;

export default playerDataSlice.reducer;
