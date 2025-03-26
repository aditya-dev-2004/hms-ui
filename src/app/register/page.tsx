import React from 'react'
import Navbar from '@/Components/Landing Page/Navbar';
import FooterSection  from '@/Components/Landing Page/FooterSection';
import UserRegister from '@/Components/Common/UserRegister';
const page = () => {
  return (
    <>
      <Navbar/>
     <UserRegister/>
      <FooterSection/>
    </>
  )
}

export default page
