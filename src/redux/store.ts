import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import userSlice from "./userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Use persistedReducer instead of persistReducer
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);
