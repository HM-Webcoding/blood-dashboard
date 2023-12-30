import React from 'react'
import { IoMdPerson, IoMdSettings, IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Flex from "../Flex"
import Container from "../Container"


const Menu = () => {
  return (
    <>
      <Container className="my-0 mx-auto">
        <nav className="py-5">
        
          <Flex className="justify-between">
            <div className="font-primaryFont">
              <p className="text-secondColor text-xs">Pages / <span className="text-headingColor">Dashboard</span> </p>
              <h3 className="text-base text-headingColor font-bold,">Dashboard</h3>
            </div>
            <Flex className="items-center gap-4 " > 
              <div className="flex items-center bg-whiteColor border border-boarderColor p-3 rounded-2xl gap-3">
                <span className="text-xl"><FaSearch /></span>
                <input className="focus:outline-none" type="text" placeholder="Type here ...."/>
              </div>
              <div className="flex items-center text-bold text-menuIconColor text-xs gap-1"><IoMdPerson />  Sing In</div>
              <div className="text-menuIconColor text-xs gap-5"><IoMdSettings /></div>
              <div className="text-menuIconColor text-xs gap-5"><IoIosNotifications /></div>
            </Flex>
          </Flex>
        </nav>
      </Container>
    </>
  )
}

export default Menu