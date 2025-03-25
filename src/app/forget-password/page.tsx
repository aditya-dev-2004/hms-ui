import React from 'react'
import Navbar from '@/Components/Landing Page/Navbar';
import FooterSection from '@/Components/Landing Page/FooterSection';
import ForgetPassword from '@/Components/Common/ForgetPassword';
const page = () => {
  return (
    <div>
      <Navbar />
      <ForgetPassword />
      <FooterSection />
    </div>
  )
}

export default page
