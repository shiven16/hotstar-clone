import { useNavigate } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import { useContext } from "react";
import apiContextProvider from "./Context";
export default function Navbar(){
    const valueFromContext = useContext(apiContextProvider);
    const navigate = useNavigate();
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src="https://i.ibb.co/Km4cjJZ/1000011191-removebg-preview.png" onClick={()=>{
                    navigate("/");
                }
               } />
            </div>
            {valueFromContext.email == "" && <button className={styles.signinButton} onClick={()=>navigate("/login")}>Sign In</button>}
            {valueFromContext.email != "" && <button className={styles.signinButton} onClick={()=>{
                valueFromContext.email = "";
                valueFromContext.username = "";
                valueFromContext.password = "";
                valueFromContext.jwt = "";
                navigate("/");
            }}>Sign Out</button>}
        </nav>
    )
}