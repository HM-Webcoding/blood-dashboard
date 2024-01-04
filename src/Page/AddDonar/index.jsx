import { useFormik } from 'formik'
import React from 'react'
import AddFormValid from '../../Validation/AddFormValid';
import { getDatabase, push, ref, set } from "firebase/database";

const AddDonar = () => {
  const db = getDatabase();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      gender: "",
      bloodGroup: "",
      dateOfBirth: "",
      email: "",
      mobile: "",
      city: "",
      lastDonate: "",
      fullAddress: "",
    },
    validationSchema: AddFormValid,
    onSubmit: () => {
      postUserData()
    },
  });
  
  const postUserData = () => {
    set(push(ref(db, 'users/'), {
      fullName: formik.values.fullName,
      gender: formik.values.gender,
      bloodGroup: formik.values.bloodGroup,
      dateOfBirth: formik.values.dateOfBirth,
      email: formik.values.email,
      mobile: formik.values.mobile,
      city: formik.values.city,
      lastDonate: formik.values.lastDonate,
      fullAddress: formik.values.fullAddress,
    })).then(()=>{
      alert("succesful")
    })
  }
  
  const handleReset = () => {
    return formik.resetForm()
  }

  return (
    
    <>
      <div className="w-10/12 h-full bg-whiteColor p-10 my-7 mx-auto rounded-2xl shadow-primaryShadow overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-track-primaryColor scrollbar-thumb-headingColor">
        <div className="text-center mb-4">
          <h2 className="font-bold text-xl text-primaryColor">Add New Donor</h2>
          <p className="text-headingColor">Put your info to be a donor</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 grid-flow-row gap-3">
            <div className="col-span-2">
              <h1>id: </h1>
            </div>
            {/* full name input field */}
            <div className="col-span-1">
              <label htmlFor="fullName" class="text-sm font-medium text-headingColor">Full Name</label>
              <div class="mt-2">
                <input 
                type="text" 
                name="fullName" 
                id="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                autoComplete="name" 
                placeholder="Hamidur Rashid" 
                class="block w-full rounded-md border border-boarderColor p-2 text-secondColor focus:outline-none shadow-primaryShadow  placeholder:text-secondColor sm:text-sm sm:leading-6"/>
                <p className="text-primaryColor pt-1 pl-1">{formik.errors.fullName}</p>
              </div>
            </div>
            {/* Gender input field */}
            <div className="col-span-1">
              <label htmlFor="gender" class="text-sm font-medium text-headingColor">Gender</label>
              <div class="mt-2">
                <select 
                id="gender" 
                name="gender" 
                value={formik.values.gender}
                onChange={formik.handleChange}
                class="block w-full rounded-md border border-boarderColor p-2 text-secondColor focus:outline-none shadow-primaryShadow  placeholder:text-secondColor sm:text-sm sm:leading-6">
                  <option value="none" selected>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">other</option>
                </select>
              </div>
              <p className="text-primaryColor pt-1 pl-1">{formik.errors.gender}</p>
            </div>
             {/* Blood group input field */}
             <div className="col-span-1">
              <label htmlFor="bloodGroup" class="text-sm font-medium text-headingColor">Blood Group</label>
              <div class="mt-2">
                <select 
                id="bloodGroup" 
                name="bloodGroup"
                value={formik.values.bloodGroup} 
                onChange={formik.handleChange}
                class="block w-full rounded-md border border-boarderColor p-2 text-secondColor focus:outline-none shadow-primaryShadow  placeholder:text-secondColor sm:text-sm sm:leading-6">
                <option value="none" selected>Blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <p className="text-primaryColor pt-1 pl-1">{formik.errors.bloodGroup}</p>
            </div>
            {/* Date of birth input field */}
            <div className="col-span-1">
              <label htmlFor="dateOfBirth" class="text-sm font-medium text-headingColor">Date of birth</label>
              <div class="mt-2">
                <input 
                 id="dateOfBirth"
                 type="date"
                 name="dateOfBirth" 
                 value={formik.values.dateOfBirth}
                 onChange={formik.handleChange}
                 autoComplete="date" 
                 class="block w-full rounded-md border border-boarderColor p-2 text-secondColor focus:outline-none shadow-primaryShadow  placeholder:text-secondColor sm:text-sm sm:leading-6"/>
              </div>
              <p className="text-primaryColor pt-1 pl-1">{formik.errors.dateOfBirth}</p>
            </div>
            {/* Email input field */}
            <div className="col-span-2">
              <label htmlFor="email" class="text-sm font-medium text-headingColor">Email <address></address></label>
              <div class="mt-2">
                <input 
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                autoComplete="email" 
                placeholder="emailaddress@gmail.com" 
                class="block w-full rounded-md border border-boarderColor p-2 text-secondColor focus:outline-none shadow-primaryShadow  placeholder:text-secondColor sm:text-sm sm:leading-6"/>
              </div>
              <p className="text-primaryColor pt-1 pl-1">{formik.errors.email}</p>
            </div>
             {/* Mobile input field */}
             <div className="col-span-1">
              <label htmlFor="mobile" class="text-sm font-medium text-headingColor">Mobile</label>
              <div class="mt-2">
                <input 
                id="mobile"
                type="number" 
                name="mobile" 
                value={formik.values.mobile}
                onChange={formik.handleChange}
                autoComplete="name" 
                placeholder="1234567890" 
                class="block w-full rounded-md border border-boarderColor p-2 text-secondColor focus:outline-none shadow-primaryShadow  placeholder:text-secondColor sm:text-sm sm:leading-6"/>
              </div>
              <p className="text-primaryColor pt-1 pl-1">{formik.errors.mobile}</p>
            </div>
            {/* City input field */}
            <div className="col-span-1">
              <label htmlFor="city" class="text-sm font-medium text-headingColor">City</label>
              <div class="mt-2">
                <input 
                id="city"
                type="text" 
                name="city" 
                value={formik.values.city}
                onChange={formik.handleChange}
                placeholder="Chattogram"
                class="block w-full rounded-md border border-boarderColor p-2 text-secondColor focus:outline-none shadow-primaryShadow  placeholder:text-secondColor sm:text-sm sm:leading-6"/>
              </div>
              <p className="text-primaryColor pt-1 pl-1">{formik.errors.city}</p>
            </div>
             {/* last donate input field */}
             <div className="col-span-1">
              <label htmlFor="lastDonate" class="text-sm font-medium text-headingColor">Last donate</label>
              <div class="mt-2">
                <input 
                id="lastDonate"
                type="date" 
                name="lastDonate"
                value={formik.values.lastDonate}  
                onChange={formik.handleChange}
                class="block w-full rounded-md border border-boarderColor p-2 text-secondColor focus:outline-none shadow-primaryShadow  placeholder:text-secondColor sm:text-sm sm:leading-6"/>
              </div>
              <p className="text-primaryColor pt-1 pl-1">{formik.errors.lastDonate}</p>
            </div>
            {/* upload profile input field */}
            <div className="col-span-1">
              <label htmlFor="postal-code" class="text-sm font-medium text-headingColor">Upload profile</label>
              <div class="mt-2">
                <input type="file" name="postal-code" placeholder="emailaddress@gmail.com" class="block w-full rounded-md border border-boarderColor p-2 text-secondColor focus:outline-none shadow-primaryShadow  placeholder:text-secondColor sm:text-sm sm:leading-6"/>
              </div>
            </div>
            {/* Full address input field */}
            <div className="col-span-2">
              <label htmlFor="fullAddress" class="text-sm font-medium text-headingColor">Full addres <address></address></label>
              <div class="mt-2">
                <textarea 
                rows="3" 
                name="fullAddress"
                id="fullAddress"
                value={formik.values.fullAddress}
                onChange={formik.handleChange}
                autoomplete="address" 
                placeholder="Optional" 
                class="block w-full rounded-md border border-boarderColor p-2 text-secondColor focus:outline-none shadow-primaryShadow  placeholder:text-secondColor sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div className="col-span-1 pt-3">
              <button type="submit" class="w-full bg-primaryColor rounded-2xl px-3 py-4 text-sm font-semibold shadow-primaryShadow text-whiteColor">SUBMIT
              </button>
            </div>
            <div className="col-span- pt-3">
              <button type="button" onClick={handleReset} class="w-full bg-headingColor rounded-2xl px-3 py-4 text-sm font-semibold shadow-primaryShadow text-whiteColor">RESET</button>
            </div>
          </div>
        </form>
        <form>

        </form>
      </div>
    </>
  )
}

export default AddDonar