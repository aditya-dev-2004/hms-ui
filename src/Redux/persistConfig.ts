import storage from "redux-persist/lib/storage"; 
// Redux Persist configuration 
const persistConfig = { 
key: "root", 
storage, 
whitelist: ["auth", "counter"], 
}; 
export default persistConfig; 