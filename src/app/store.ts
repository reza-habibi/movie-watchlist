import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { movieApi } from "./../services/movieApi";
import { movieDetailsApi } from "./../services/movieDetailsApi";
import watchListReducer from "../redux/watchListSlicer";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [movieDetailsApi.reducerPath]: movieDetailsApi.reducer,
    watchList: watchListReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieDetailsApi.middleware , movieApi.middleware
    ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
