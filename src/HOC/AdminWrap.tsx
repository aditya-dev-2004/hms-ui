import { userSession } from "@/Helpers/userSession"
import { useRouter } from "next/navigation";
import { useEffect } from "react" 
export function AdminWrap(WarperComponent: any) {
    return (props: any) => {  
        const router=useRouter()
       const adminData= userSession(); 
        useEffect(()=>{
      if(!(adminData?.jwtToken && adminData?.userType=="admin")){
        router.push('/login')
      } 
        },[])
        return <WarperComponent { ...props } />
    }
}
