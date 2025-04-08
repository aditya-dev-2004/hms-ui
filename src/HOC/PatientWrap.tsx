import { userSession } from "@/Helpers/userSession"
import { useRouter } from "next/navigation";
import { useEffect } from "react" 
export function PatientWrap(WarperComponent: any) {
    return (props: any) => {  
        const router=useRouter()
       const data= userSession(); 
        useEffect(()=>{
      if(!(data?.jwtToken && data?.userType=="patient")){
        router.push('/login')
      } 
        },[])
        return <WarperComponent { ...props } />
    }
}
