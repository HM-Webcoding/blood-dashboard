import React from 'react'
import { IoIosPersonAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const DonorDetails = () => {
  return (
    <>
        <div>
            <h3 className="text-sm font-bold text-headingColor">Donor Details</h3>
            <ul>
                <li className="flex items-center gap-3 text-secondColor text-sm font-bold pt-4">
                    <span className="text-xl p-2 rounded-xl bg-whiteColor text-primaryColor"><IoIosPersonAdd /> </span><Link to="/adddonar">Add New</Link>
                </li>
                <li className="flex items-center gap-3 text-secondColor text-sm font-bold pt-4">
                    <span className="text-xl p-2 rounded-xl bg-whiteColor text-primaryColor"><FaEdit /> </span><Link to="/updatedetails">Update details</Link>
                </li>
                <li className="flex items-center gap-3 text-secondColor text-sm font-bold pt-4">
                    <span className="text-xl p-2 rounded-xl bg-whiteColor text-primaryColor"><FaListCheck /> </span><Link to="/alldonar">All Donar</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default DonorDetails