import { Fragment, useState } from "react"
import styles from "./menuBar.module.css"

function MenuBar() {
    
   
    return(<Fragment> 
        
        
        <div className={styles.navigation}>
            <input type="checkbox" className={styles.navigation__checkbox} id="navi-toggle"></input>

             <label htmlfor="navi-toggle" className={styles.navigation__button}>
                <span className={styles.navigation__icon}>&nbsp;</span>
            </label> 
            
            <div className={styles.navigation__background}>&nbsp;</div>

            <nav className={styles.navigation__nav}>
                <ul className={styles.navigation__list}>
                   
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Home</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Software</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Hardware</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Members</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Gallery</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Timeline</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Hardware</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Contact</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}>Bot description</a></li>
                    </ul>
            </nav>
        </div>
        <div className={styles.menu} >
            <button className={styles.menubutton}>Contact</button>
            <button className={styles.menubutton}>Bot description</button>
            <button className={styles.menubutton}>Members</button>
            <button className={styles.menubutton}>Members</button>
            <button className={styles.menubutton}>Timeline</button>
            <button className={styles.menubutton}>Gallery</button>
            <button className={styles.menubutton}>Software</button>
            <button className={styles.menubutton}>Hardware</button>
            <button className={styles.menubutton}>Home</button>

        </div>
    </Fragment>)
}

export default MenuBar;