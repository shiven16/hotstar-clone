import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/MovieCard.module.css";
import apiContextProvider from "./Context";
export default function MovieCard({movie}){
  const valueFromContext = useContext(apiContextProvider);
  const navigate = useNavigate();
  const handle = ()=>{
    if(valueFromContext.jwt == ""){
      alert("You have not logged in to your account")
      navigate("/login");
    }
  }
    return (
        <div>

            <div className={styles.card} >
                <img src={movie.thumbnail}/>
                <div className={styles.layer}>
                  <button onClick={handle} className={styles.btn}>Watch Now</button>
                  <div className={styles.info}>
                    <p>{movie.description}</p>
                  </div>
                </div>
                
            </div>
        </div>
    )
}