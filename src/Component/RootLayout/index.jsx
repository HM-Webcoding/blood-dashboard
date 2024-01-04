import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../Menu'
import Sidebar from '../Sidebar'
import Container from '../Container'

const RootLayout = () => {
  return (
    <>
    <Container className="grid grid-rows-12 grid-cols-12 my-0 mx-auto h-screen">
      <div class="row-span-12 col-span-2"><Sidebar/></div>
      <div class="col-span-10 row-spna-2"><Menu/></div>
      <div class="row-span-10 col-span-10"><Outlet/></div>
    </Container>
    </>
  )
}

export default RootLayout