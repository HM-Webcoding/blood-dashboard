import { Route, Routes } from "react-router-dom"
import Home from "./Page/Home/Home"
import RootLayout from "./Component/RootLayout"
import AddDonar from "./Page/AddDonar"
import UpdateDetails from "./Page/UpdateDetails"
import AllDonar from "./Page/AllDonar"


function App() {

  return (
      <Routes >
        <Route path="/" element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/adddonar" element={<AddDonar/>} />
          <Route path="/updatedetails" element={<UpdateDetails/>} />
          <Route path="/alldonar" element={<AllDonar/>} />
        </Route>
      </Routes>
  )
}

export default App
