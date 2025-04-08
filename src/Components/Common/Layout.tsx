"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu, } from "react-icons/gi";
import { FaUserAlt ,FaHandHoldingMedical} from "react-icons/fa";
import { BiSolidInjection } from "react-icons/bi";
import { TbNewSection } from "react-icons/tb";  
import DashboardNavbar from "./DashboardNavbar";
import { userSession } from "@/Helpers/userSession";

const Layout = ({ children }: any) => {
  const userData = userSession();
  const [data, setData] = useState(false);
  const [sideNav, setSideNav] = useState([]); 

  const adminMenu: any = [
    {
      title: "User List",
      link: "/admin-userlist",
      icon: <FaUserAlt />,
    },
    {
      title: "Department",
      link: "/admin-department",
      icon: <TbNewSection />,
    },
  ];
  const doctorMenu: any = [
    {
      title: "Appointments",
      link: "/doctor-apprequest",
      icon: <BiSolidInjection/>,
    },
  ];
  const patientMenu: any = [
    {
      title: "Appointment",
      link: "/patient-appointment",
      icon: <FaHandHoldingMedical />,
    },
    
  ];

  useEffect(() => {
    if(userData?.userType=='admin'){
      setSideNav(adminMenu)
    }else if(userData?.userType=='patient'){
      setSideNav(patientMenu)
    }
    else if(userData?.userType=='doctor'){
      setSideNav(doctorMenu)
    }
  }, [userData]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className={
              data == false
                ? "col-lg-2 px-0  d-none d-lg-block dashboard-left-container"
                : "col-lg-1 px-0  d-none d-lg-block dashboard-left-container"
            }
          >
            <div
              className={
                data == false
                  ? "left-top bg-dark d-flex justify-content-between align-items-center px-3"
                  : "left-top bg-dark d-flex  align-items-center "
              }
            >
              <div className={data == false ? "fs-5 text-light" : "d-none"}>
                Admin Dashboard
              </div>
              <div className="mx-auto">
                {" "}
                <button
                  onClick={() => setData(!data)}
                  className="d-none   d-lg-block  rounded-circle btn hamburger-style text-light"
                >
                  {" "}
                  <GiHamburgerMenu />{" "}
                </button>
              </div>
            </div>
            <div className="left-bottom text-light p-3">
              <ul className="navbar-nav mx-auto">
                {sideNav?.map((items: any) => (
                  <>
                    <li className="nav-item mb-2 rounded-pill">
                      <Link
                        className={
                          data == false
                            ? " rounded-pill d-flex align-items-center nav-link px-3 py-2"
                            : " rounded-pill d-flex align-items-center nav-link px-1 py-2 text-center"
                        }
                        href={items.link}
                      >
                        <span
                          className={
                            data == false
                              ? "d-block my-span me-2 fs-4"
                              : "d-block my-span mx-auto  fs-4 "
                          }
                        >
                          {items.icon}
                        </span>
                        <span
                          className={data == false ? "d-block px-2 " : "d-none"}
                        >
                          {items.title}{" "}
                        </span>
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={
              data == false
                ? "col-lg-10  dashboard-right-container"
                : "col-lg-11  dashboard-right-container"
            }
          >
            <DashboardNavbar sideNav={sideNav} />
            <div className="row right-bottom ">
              <div className="col-lg-12 p-0 ">
                {/* <DashboardContent/> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
