import React from 'react'
import Navbar from '@/Components/Landing Page/Navbar';
import FooterSection from '@/Components/Landing Page/FooterSection';  
import ResetPassword from '@/Components/Common/ResetPassword';
const page = () => {
  return (
    <div>
     <Navbar/>
     <ResetPassword/>
     <FooterSection/>
    </div>
  )
}

export default page
