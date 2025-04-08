'use client'
import { userSession } from '@/Helpers/userSession';
import { AdminWrap } from '@/HOC/AdminWrap';
import React from 'react' 
const AdminUserListCom = () => {  
  return (
    <>
         <div className="row bg-light pt-5">
          <div className="col-sm-10 p-3 department mx-auto ">
          <h2 className="my-3 text-center" style={{color:" #1A237E"}}> Doctor List</h2>
          <table className="table" >
            <thead className="thead">
          <tr >
            <th className="thead text-light">#ID</th>
            <th className="thead text-light">Name</th>
            <th className="thead text-light">Gender</th>
            <th className="thead text-light">Email</th>
            <th className="thead text-light">specialist</th>
            <th className="thead text-light">qualifications</th>
            <th className="thead text-light">experience</th>
            <th className="thead text-light">fees</th>
            <th className="thead text-light">address</th>
            <th className="thead text-light">Is Active</th>
            
            <th className="thead text-light">Actions</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>1</td>
            <td>Cardiology</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-outline-danger me-2">Del</button>
              <button className="btn btn-outline-info">Edit</button>
            </td>
          </tr>
        </tbody>
      
          </table>
          </div>
        </div>
        <div className="row bg-light py-5">
          <div className="col-sm-10 p-3 department mx-auto ">
          <h2 className="my-3 text-center" style={{color:" #1A237E"}}> Patient List</h2>
          <table className="table" >
            <thead className="thead">
          <tr >
            <th className="thead text-light">#ID</th>
            <th className="thead text-light">Name</th>
            <th className="thead text-light">Gender</th>
            <th className="thead text-light">Email</th>
            <th className="thead text-light">Age</th>
            <th className="thead text-light">Blood Group</th>
            <th className="thead text-light">Aadhaar No</th>
            <th className="thead text-light">Is Active</th>
            <th className="thead text-light">Actions</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>1</td>
            <td>Cardiology</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="btn btn-outline-danger me-2">Del</button>
              <button className="btn btn-outline-info">Edit</button>
            </td>
          </tr>
        </tbody>
      
          </table>
          </div>
        </div>


    </>
  )
}

export default AdminWrap(AdminUserListCom)
