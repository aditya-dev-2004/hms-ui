import React from 'react'
import Navbar from '@/Components/Landing Page/Navbar';
import FooterSection from '@/Components/Landing Page/FooterSection'; 
import UserLogin from '@/Components/Common/UserLogin';
const page = () => {
  return (
    <div>
      <Navbar/>
      <UserLogin/>
      <FooterSection/>
    </div>
  )
}

export default page
