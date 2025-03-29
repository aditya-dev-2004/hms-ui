import axios from "axios";
const BASEURL=`http://localhost:9000/`

export const userAuthLogin=async(payload:any)=>{
    const response=await axios.post(`http://localhost:9000/v1/api/login`,payload);
    return response?.data
   }

