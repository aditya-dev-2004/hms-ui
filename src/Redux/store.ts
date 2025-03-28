import { configureStore, combineReducers } from "@reduxjs/toolkit"; 
import { persistStore, persistReducer } from "redux-persist"; 
import persistConfig from "@/Redux/persistConfig"; 
import authReducer from "@/Redux/slices/authSlice"; 
import counterReducer from "@/Redux/slices/counterSlice"; 
// Combine reducers 
const rootReducer = combineReducers({ 
auth: authReducer, 
counter: counterReducer, 
}); 
// Apply persist reducer 
const persistedReducer = persistReducer(persistConfig, rootReducer); 
// Configure store 
export const store = configureStore({ 
reducer: persistedReducer, 
middleware: (getDefaultMiddleware) => 
getDefaultMiddleware({ serializableCheck: false }),
}); 
// Create persistor instance 
export const persistor = persistStore(store);