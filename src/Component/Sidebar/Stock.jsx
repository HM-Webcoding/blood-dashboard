import React from 'react'
import { GrSubtractCircle } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineAddTask } from "react-icons/md";

const Stock = () => {
  return (
    <>
        <div className="pt-4">
            <h3 className="text-sm font-bold text-headingColor">Stock Details</h3>
            <ul>
                <li className="flex items-center gap-3 text-secondColor text-sm font-bold pt-4">
                    <span className="text-xl p-2 rounded-xl bg-whiteColor text-primaryColor"><MdOutlineAddTask /> </span><a href='#'>Increase</a>
                </li>
                <li className="flex items-center gap-3 text-secondColor text-sm font-bold pt-4">
                    <span className="text-xl p-2 rounded-xl bg-whiteColor text-primaryColor"><GrSubtractCircle /> </span><a href='#'>Decrease</a>
                </li>
                <li className="flex items-center gap-3 text-secondColor text-sm font-bold pt-4">
                    <span className="text-xl p-2 rounded-xl bg-whiteColor text-primaryColor"><TbListDetails /> </span><a href='#'>Details</a>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Stock