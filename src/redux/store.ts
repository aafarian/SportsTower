import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import playerDataReducer from './slices/playerDataSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    playerData: playerDataReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
