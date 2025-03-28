import { createSlice } from "@reduxjs/toolkit"; 
// Initial state for counter 
const initialState = { 
count: 0, 
}; 
const counterSlice = createSlice({ 
name: "counter", 
initialState, 
reducers: { 
increment: (state) => { 
state.count += 1; 
}, 
decrement: (state) => { 
state.count -= 1; 
}, 
}, 
}); 
// Export actions 
export const { increment, decrement } = counterSlice.actions; 
export default counterSlice.reducer; 