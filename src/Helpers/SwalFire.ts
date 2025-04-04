import Swal from "sweetalert2"; 
export const swalFire=(title:any,text:any,type:any="success")=>{
  Swal.fire({
    title ,
    text ,
    icon: type
  });
 }