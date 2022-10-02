import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Homesec1 } from "../pages/Home";
import  Login  from "../pages/Login";
export function AllRoutes(){
    return (
        <>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Homesec1/>}/>
        </Routes>
        </>
    )
}