import { Fragment } from "react"
import styles from "./membersCard.module.css"
import tr12 from "../data18.json";
import Image from "next/image";

function MembersCardHead18(){
    
    
    return(
        
        tr12.map(record4=>{

    
    return(
            
            <div className={styles.member} key={record4.id}>
                <Image className={styles.imgh1} src={record4.imgh} width="156px" height="220px"></Image>                <p>{record4.name}</p>
            
                <p>{record4.email}</p>
                
            </div>
            
        
    )
   })
   
)}

export default MembersCardHead18;
