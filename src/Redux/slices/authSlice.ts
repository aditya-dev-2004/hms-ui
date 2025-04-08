import { createSlice } from "@reduxjs/toolkit";
// Initial state for authentication 
const initialState =null;
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => { 
            return action.payload;  
        },
        logout: (state) => null 
    },
});
// Export actions 
export const { login, logout } = authSlice.actions;
export default authSlice.reducer; 