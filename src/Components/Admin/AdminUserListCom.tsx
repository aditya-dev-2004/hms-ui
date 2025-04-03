'use client'
import React from 'react'
import { useSelector} from 'react-redux'
const AdminUserListCom = () => {
    const data=useSelector((state:any)=>state?.auth)


  return (
    <h1>
        {data?.name} <br />
        {data?.email} <br />
        {data?.jwtToken}

    </h1>
  )
}

export default AdminUserListCom
