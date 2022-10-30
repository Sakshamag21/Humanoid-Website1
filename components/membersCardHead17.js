import { Fragment } from "react"
import styles from "./membersCard.module.css"
import tr15 from "../data.json";
import Image from "next/image";

function MembersCardHead17(){
    
    
    return(
        
        tr15.map(record4=>{

    
    return(
            
            <div className={styles.member} key={record4.id}>
                <Image className={styles.imgh1} src={record4.imgh} width="156px" height="220px"></Image>
                <p>{record4.name}</p>
                <p>{record4.position}</p>
                <p>{record4.email}</p>
                <p>{record4.mobile}</p>
            </div>
            
        
    )
   })
   
)}

export default MembersCardHead17;
