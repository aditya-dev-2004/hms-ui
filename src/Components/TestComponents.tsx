'use client'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "@/Redux/slices/authSlice";
import { increment, decrement } from "@/Redux/slices/counterSlice";
const TestComponents = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.counter.count);
    const user = useSelector((state: any) => state.auth.user);
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    return (
        <div>
            {isAuthenticated ? (
                <>
                    <h2 className='btn btn-success'>Welcome, {user}</h2>
                    <button className='btn btn-success' onClick={() => dispatch(logout())}>Logout</button>
                </>
            ) : (
                <button className='btn btn-success' onClick={() => dispatch(login("John Doe"))}>Login</button>
            )}
            <hr />

            <button className='btn btn-success me-2' onClick={() => dispatch(increment())}>+</button> {count}
            <button className='btn btn-success ms-2' onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default TestComponents
