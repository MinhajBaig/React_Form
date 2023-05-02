import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../Components/Login"
import Home from "../Components/Home"


class Navigation extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Login/>}> </Route>
                    <Route path="/home" element={<Home/>} />
                </Routes>



            </>
        )
    }
}

export default Navigation