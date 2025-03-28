"use client";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

const DashboardContent = () => {
  return (
    <div className="container-fluid p-4" style={{ background: "#1e1e1e", minHeight: "100vh", color: "white" }}>
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8">
          {/* Income & Spending */}
          <div className="card p-3 mb-4" style={{ background: "#2b2b2b", borderRadius: "15px", border: "none", color: "white" }}>
            <h5 className="fw-bold">Income & Spending <span className="text-danger fw-bold ms-5">- $2,000</span>  <span className="text-success fw-bold ms-5">+ $6,000</span></h5>
            <div className="d-flex justify-content-between align-items-center">
              
              
            </div>
          </div>

          {/* Transactions */}
          <div className="card p-4 mb-4" style={{ background: "#2b2b2b", borderRadius: "15px", border: "none" }}>
            <h5 className="text-white mb-3">Transaction</h5>
            <ul className="list-group">
              {["Hospital", "Alfred Torree", "Cloudia", "Installment"].map((name, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center bg-transparent border-bottom text-white py-3">
                  <div className="d-flex align-items-center">
                    <FaExclamationCircle className="text-white me-2" />
                    <span className="fw-bold">{name}</span>
                  </div>
                  <div className="d-flex align-items-center text-center" style={{ width: "120px" }}>
                    <span className="text-white fw-bold">Payment</span>
                  </div>
                  <span className={index % 2 === 0 ? "text-danger fw-bold" : "text-success fw-bold"}>{index % 2 === 0 ? "- $2,000" : "+ $2,000"}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Saved Contacts */}
          <div className="card p-3" style={{ background: "#2b2b2b", borderRadius: "15px", border: "none" }}>
            <h5 className="text-white">Saved Contact</h5>
            <div className="d-flex justify-content-between">
              {["Alfred", "John", "Aivisa", "Tosty", "Alfred"].map((name, index) => (
                <div key={index} className="text-center">
                  <img src="/user.avif" alt={name} className="rounded-circle border border-secondary" style={{ width: "60px", height: "60px" }} />
                  <p className="mt-2 text-white small">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4">
          <div className="card p-3 mb-4 text-white" style={{ background: "linear-gradient(to right, #4a6cb3, #1f3c88)", borderRadius: "15px", border: "none" }}>
            <h5>Debit</h5>
            <h6>Lerana Bank</h6>
            <h2>$3,000</h2>
            <p>Expired Date: <strong>March 5th 2024</strong></p>
            <p>Olivia Wsooon - <strong>Mattor Card</strong></p>
          </div>

          {/* Card Info */}
          <div className="card p-3 mb-4" style={{ background: "#2b2b2b", borderRadius: "15px", border: "none",color:"white" }}>
            <h5 className="text-white">Card Info</h5>
            <p className="mb-1">Card Number: <strong>1242 644 8765</strong></p>
            <p className="mb-1">Name: <strong>Olivia</strong></p>
            {/* <p className="mb-1">Status: <span className="text-success fw-bold">Active</span></p> */}
            <p className="mb-1">Balance: <strong>$3,000</strong></p>
            <p className="mb-1">Expired Date: <strong>March 24th 2024</strong></p>
            <p className="mb-1">Type: <strong>Mattor Card</strong></p>
            <p className="mb-1">Bank: <strong>Lerana Bank</strong></p>
          </div>

          {/* Add New Card Button */}
          <button className="btn btn-primary w-100">Add New Card</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;