import { useState, useContext } from "react";
import Navbar from "./Navbar.js";

import styles from "../css/Login.module.css";
import { useNavigate } from "react-router-dom";
import apiContextProvider from "./Context.js";

export default function SignUp(){
    const valueFromContext = useContext(apiContextProvider);
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [credentials, setCredentials] = useState({
        name:"",
        email:"",
        password:"",
        appType:"ott"
    })
    const handleSignUp = ()=>{
        async function check(){
            let res = await fetch("https://academics.newtonschool.co/api/v1/user/signup",{
                method: "POST",
                headers:{
                    'accept' : "application/json",
                    'projectID' : valueFromContext.projectId,
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(credentials)
            })
            let data = await res.json()
            if(data.status == "success"){
                setError("");
                navigate("/login");
            }
            else{
                setError(()=>{
                    return data.message.split(".")[0];
                })
            }
        }
        if(credentials.password != ""){
            setError("");
            check();
        }
        else{
            setError("Invalid input data");
        }
    }
    return(
        
    <div>
        <Navbar></Navbar>
        <div className={styles.block}>
            <h2 className={styles.h2}>Sign Up</h2>
            <form>
                <input className={styles.input} value={credentials.name} onChange={(e)=>{
                    setCredentials((prev)=>{
                        return{...prev, name:e.target.value};
                    })
                }} type='text' placeholder='Name'/>
                <input className={styles.input} value={credentials.email} onChange={(e)=>{
                    setCredentials((prev)=>{
                        return{...prev, email:e.target.value};
                    })
                }} type='email' placeholder='Email'/>
                <div style={{
                    display:"flex",
                }}>

                    <input className={styles.input} value={credentials.password} onChange={(e)=>{
                        setCredentials((prev)=>{
                            return{...prev, password:e.target.value};
                        })
                    }} type="password" placeholder='Password'/>
                </div>

            </form>
            <p className={styles.p} style={{
                color:"red",
                fontSize:"2vh"
            }}>{error}</p>
            <button className={styles.button} onClick={handleSignUp}>Sign Up</button>
            <p className={styles.p} >Already have an account? <span className={styles.span} onClick={()=>navigate("/login")}> Sign in here.</span></p>
            
        </div>

    </div>
    )
}