import { configureStore } from '@reduxjs/toolkit';
import { blogApi } from './slices/blogApis';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [blogApi.reducerPath]: blogApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(blogApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];