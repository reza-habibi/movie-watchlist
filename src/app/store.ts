import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { movieApi } from './../services/movieApi';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]:movieApi.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
