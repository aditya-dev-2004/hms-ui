import { createSlice } from "@reduxjs/toolkit";
// Initial state for authentication 
const initialState = { 
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => { 
            state = action.payload;  
        },
        logout: (state) => { 
        },
    },
});
// Export actions 
export const { login, logout } = authSlice.actions;
export default authSlice.reducer; 