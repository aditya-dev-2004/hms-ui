import { useSelector } from "react-redux"
export const userSession= ()=>{
      const data=  useSelector((state:any)=>state?.auth);
      return data
}


// const data=useSelector((state:any)=>state?.auth)