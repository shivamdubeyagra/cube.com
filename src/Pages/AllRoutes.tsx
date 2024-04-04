import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"



const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/customer/:id" element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes