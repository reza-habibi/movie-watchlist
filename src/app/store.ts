import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { movieApi } from './../services/movieApi';
import { movieDetailsApi } from './../services/movieDetailsApi';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]:movieApi.reducer,
    [movieDetailsApi.reducerPath]:movieDetailsApi.reducer
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
