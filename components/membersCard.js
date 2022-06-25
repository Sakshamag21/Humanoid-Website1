import { Fragment } from "react"
import styles from "./membersCard.module.css"
import tr from "../data.json";
// import Image from "next/image";

export default function MembersCard(){
    
    
    return(
        
        tr.map(record=>{

    
    return(
        
            <div className={styles.member}>
                <img className={styles.imgh1} src={record.imgh}></img>
                <p>{record.name}</p>
                <p>{record.position}</p>
                <p>{record.email}</p>
                <p>{record.mobile}</p>
            </div>
            
        
    )
   })
   
)}
