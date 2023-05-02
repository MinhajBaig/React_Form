import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Home";
import { redirect, useNavigate } from "react-router-dom";


function Login() {

    let [email, setemail] = useState(" ")
    let navigate = useNavigate()

    const submit_func = () => {
        if (email == " ") {
            toast.error("Enter Your Email Please", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
        else {
            localStorage.setItem("User Registered", true)
            toast.success("email is regsister", {
                position: "top-center",
                theme: "colored",
                autoClose: 1000,
                progress: 0,
                draggable: true,
            })

            navigate("/home", { replace: true })
            console.log(useNavigate);
        }

    }


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Login Page</h1>
            <div>

                <input type="text" name="" id="" value={email} 
                style={{display:"block",margin:"auto",marginTop:"10px"}}
                onChange={(e)=>setemail(e.target.value)}
                />
                <input type="text" name="" id="" 
                style={{display:"block",margin:"auto",marginTop:"10px"}}
                />

            </div>
            <br />
            <button onClick={()=> submit_func()} style={{display:"block",margin:"auto"}}>Submit</button>

            <ToastContainer/>

        </>
    )










}


export default Login