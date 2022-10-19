import MenuBar from "../components/menuBar";
import MembersCard from "../components/membersCard";
import styles from "./membersPage.module.css";
function membersPage(){
    return(<>
        <MenuBar></MenuBar>
        <div className={styles.title}><b>Meet the Team</b></div>
        <div className={styles.membersBox}>
        <MembersCard></MembersCard></div>
        </>)
}
export default membersPage;