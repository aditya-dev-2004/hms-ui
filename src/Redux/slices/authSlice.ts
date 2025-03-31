import { createSlice } from "@reduxjs/toolkit";
// Initial state for authentication 
const initialState = {
    user: null,
    isAuthenticated: false,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});
// Export actions 
export const { login, logout } = authSlice.actions;
export default authSlice.reducer; 