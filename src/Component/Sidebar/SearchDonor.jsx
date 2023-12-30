import React from 'react'
import { MdBloodtype } from "react-icons/md";
import { LiaSearchLocationSolid } from "react-icons/lia";

const SearchDonor = () => {
  return (
    <>
     <div className="pt-4">
        <h3 className="text-sm font-bold text-headingColor">Search Donor</h3>
        <ul>
            <li className="flex items-center gap-3 text-secondColor text-sm font-bold pt-4 ">
                <span className="text-xl p-2 rounded-xl bg-whiteColor text-primaryColor"><LiaSearchLocationSolid /> </span><a href='#'>Location</a>
            </li>
            <li className="flex items-center gap-3 text-secondColor text-sm font-bold pt-4">
                <span className="text-xl p-2 rounded-xl bg-whiteColor text-primaryColor"><MdBloodtype /> </span><a href='#'>Blood Group</a>
            </li>
        </ul>
     </div>
    </>
  )
}

export default SearchDonor