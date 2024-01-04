import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";

const AllDonar = ({id}) => {
  const [donorList, setDonorList] = useState([])
  const db = getDatabase();

  useEffect(()=>{
    const starCountRef = ref(db, 'users/' );
    onValue(starCountRef, (snapshot) => {
      const allDonor = []
      snapshot.forEach((eachDonor)=>{
          allDonor.push({
            ...eachDonor.val(),
            id: eachDonor.key
          })
      })
      setDonorList(allDonor);
  });
  }, [])

  
  console.log();
  return (
    <>
      <div className="w-11/12 h-full bg-whiteColor p-4 my-7 mx-auto rounded-2xl shadow-primaryShadow overflow-x-scroll scrollbar-thin scrollbar-thumb-primaryColor">
        <div className="text-center">
          <h2 className="font-bold text-xl text-primaryColor">All donor are here</h2>
        </div>
        <div className="grid grid-cols-11 w-[1536px] rounded-l grid-flow-row bg-headingColor text-whiteColor p-x-4">
          <div className="grid col-span-1 p-2  border-r">Id</div>
          <div className="grid col-span-1 p-2  border-r">Name</div>
          <div className="grid col-span-1 p-2  border-r">B.Group</div>
          <div className="grid col-span-1 p-2  border-r">Dob</div>
          <div className="grid col-span-1 p-2  border-r">Gender</div>
          <div className="grid col-span-2 p-2  border-r">Email</div>
          <div className="grid col-span-1 p-2  border-r">Mobile</div>
          <div className="grid col-span-1 p-2  border-r">City</div>
          <div className="grid col-span-1 p-2  border-r">Last donate</div>
          <div className="grid col-span-1 p-2  border-r">address</div>
        </div>
      {
        donorList.map((item, id)=> (
          <div className={"grid grid-cols-11 w-[1536px] rounded-l bg-[#F1EFEF] grid-flow-row text-headingColor p-x-2 my-1"}>
          <div className="grid col-span-1 p-2">{id + 1}</div>
          <div className="grid col-span-1 p-2">{item.fullName}</div>
          <div className="grid col-span-1 p-2"> {item.bloodGroup} </div>
          <div className="grid col-span-1 p-2">{item.dateOfBirth}</div>
          <div className="grid col-span-1 p-2">{item.gender}</div>
          <div className="grid col-span-2 p-2" >{item.email}</div>
          <div className="grid col-span-1 p-2">{item.mobile}</div>
          <div className="grid col-span-1 p-2">{item.city}</div>
          <div className="grid col-span-1 p-2">{item.lastDonate}</div>
          <div className="grid col-span-1 p-2">{item.fullAddress}</div>
        </div>

        ))
      }
        
      </div>  
    </>
  )
}

export default AllDonar