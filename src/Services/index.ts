import { userSession } from "@/Helpers/userSession";
import axios from "axios";
const BASEURL = `http://localhost:9000` 
export const userAuthLogin = async (payload: any) => {
    const response = await axios.post(`${BASEURL}/v1/api/login`, payload);
    return response?.data
}

export const userAuthRegister = async (payload: any) => {
    const response = await axios.post(`${BASEURL}/v1/api/register`, payload);
    return response?.data
}

export const userForgetPassService = async (payload: any) => {
    const response = await axios.post(`${BASEURL}/v1/api/forget-password`, payload);
    return response?.data
}

export const userRestPassService = async (payload: any) => {
    const response = await axios.post(`${BASEURL}/v1/api/reset-password`, payload);
    return response?.data
}

export const adminAddDepartmentService = async (payload: any,token:any) => {
    const response = await axios.post(`${BASEURL}/v1/api/admin-add-department`, payload,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    return response?.data
}

export const getDepartmentService = async (token:any) => {
    const response = await axios.get(`${BASEURL}/v1/api/admin-add-department`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    return response?.data
}