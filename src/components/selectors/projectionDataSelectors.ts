import { type RootState } from '../../redux/store';

const selectProjectionDataByProjectionId = (projectionId: string) => (state: RootState) => {
  return state.playerData.projections[projectionId];
};

const selectAllProjectionData = (state: RootState) => Object.keys(state.playerData.projections);

const selectAllPickedCards = (state: RootState) => Object.keys(state.playerData.allSelectedProjections);

export default {
  selectProjectionDataByProjectionId,
  selectAllProjectionData,
  selectAllPickedCards,
};
