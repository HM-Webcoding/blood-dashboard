import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import DonorDetails from './DonorDetails';
import SearchDonor from './SearchDonor';
import Stock from './Stock';
import { BiSolidDonateHeart } from "react-icons/bi";
import Flex from '../Flex';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <>
      <div className=" px-3 ">
        <div className="font-bold text-sm pt-11 pb-7 border-b border-boarderColor"> 
          <Flex className="items-center gap-3">
          <span className="text-primaryColor text-xl"><BiSolidDonateHeart/> </span> Donate Blood
          </Flex>
        </div>

        <Link to="/"><div className="flex items-center gap-3 py-3 pl-4 bg-whiteColor rounded-2xl shadow-primaryShadow mt-5 mb-4 mr-4">
          <span className="p-2 bg-primaryColor text-whiteColor text-xl rounded-full"><IoHomeOutline  /></span>
           <h3 className="text-headingColor text-sm font-bold">Dashboard</h3>
        </div></Link>

        <DonorDetails/>
        <SearchDonor/>
        <Stock/>
      </div>
    </>
  )
}

export default Sidebar