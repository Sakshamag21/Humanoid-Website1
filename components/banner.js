import { Fragment } from "react";
import styles from "./banner.module.css";

export default function Banner(){
    return(<Fragment>
        <div className={styles.back}>
            <div className={styles.robo}> </div>
            
            <div className={styles.content}>
                <div className={styles.name}>Team Humanoid</div>
                Join the Robolution
            </div>
        </div>

    </Fragment>)
}