import Head from "next/head";
import styles from "../styles/Home.module.css";
import MenuBar from "../components/menuBar";
import Banner from "../components/banner";
import ContactPage from "../components/contactPage";
import MembersCard from "../components/membersCard";
import BotSection from "../components/botSection";
import SoftwareCard from "../components/software";
import Header from "../components/Header";
import Ach from "../components/ach";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
      <MenuBar></MenuBar>
      <Banner></Banner>
      <ContactPage></ContactPage><div id="section2"></div>
      
      
        
      </main>
      
      {/* <div className={styles.centerCard}><MembersCard></MembersCard></div>
      <Ach></Ach>
      <BotSection></BotSection>
      <div className={styles.inlineCard}><SoftwareCard></SoftwareCard></div>
      <Header></Header> */}
      
     
      
    </div>

  );
}
