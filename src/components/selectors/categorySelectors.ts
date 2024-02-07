import { type RootState } from '../../redux/store';

const selectAllCategories = (state: RootState) => state.playerData.allCategories;

export default {
  selectAllCategories
};
