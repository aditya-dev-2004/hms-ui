'use client'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "@/Redux/slices/authSlice";
import { increment, decrement } from "@/Redux/slices/counterSlice";
const TestComponents = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.counter.count);
    const user = useSelector((state: any) => state.auth);
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    console.log(user,"jhkhukjh");
    
    return (
       <h1>fdgh</h1>
    )
}

export default TestComponents
