import styles from "./botSection.module.css"
import tr1 from "../data1.json"
export default function BotSection(){
return(
    tr1.map(record1=>{
    return(<div className={styles.botContainer}>
        <img className={styles.imgh} src={record1.imgh}></img>
        <div className={styles.desc}>
            <p className={styles.nameFont}><b>{record1.name}</b></p>
            <p>{record1.description}</p>
            <button className={styles.buttonRead}>Read More</button>
        </div>
    </div>)
}))}