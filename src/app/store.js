import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    allCart: persistedReducer,
  },
});

 export const persistor = persistStore(store);
