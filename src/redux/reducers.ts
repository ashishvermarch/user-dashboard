import { combineReducers } from "redux";
import user from "./slices/user";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
};

const userTypeConfig = {
  key: "user",
  storage: storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userTypeConfig, user),
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
