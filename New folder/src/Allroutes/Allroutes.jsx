import { Route, Routes } from "react-router-dom";
import { Home, Homesec1 } from "../pages/Home";
export function AllRoutes(){
    return (
        <>
        <Routes>
        <Route path="/login" element={<h1>login</h1>}/>
        <Route path="/" element={<Homesec1/>}/>
        </Routes>
        </>
    )
}