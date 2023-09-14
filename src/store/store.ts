import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import queryParamsReducer from "../features/googleBooks/queryParamsSlice";
import { googleBooksApi } from "../services/googleBooksAPI";

export const store = configureStore({
  reducer: {
    queryParams: queryParamsReducer,
    [googleBooksApi.reducerPath]: googleBooksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(googleBooksApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
