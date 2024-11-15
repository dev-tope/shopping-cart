import AppNav from "./AppNav"
import styles from "../styles/footer.module.css"
import navStyles from "../styles/appNav.module.css"

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.title}`}>
        <h2 className={`${styles.titleName}`}>UrbanAura</h2>
      </div>
      <nav className={`${navStyles.footer}`}>
        <AppNav />
      </nav>
      <div className={`${styles.socials}`}>
         <h3 className={`${styles.socialsTitle}`}>Socials</h3>
         <ul className={`${styles.socialsLink}`}>
          <img src="./fb.png" alt="facebook icon" />
          <img src="./ig.png" alt="instagram icon" />
          <img src="./tiktok.png" alt="tikto icon" />
         </ul>
      </div>

    </div>
  )
}

export default Footer;