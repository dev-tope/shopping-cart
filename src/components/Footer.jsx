import AppNav from "./AppNav"
import styles from "../styles/footer.module.css"
import navStyles from "../styles/appNav.module.css"

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.title}`}>
        <h2>UrbanAura</h2>
      </div>
      <nav className={`${navStyles.footer}`}>
        <AppNav />
      </nav>
      <div className={`${styles.socials}`}>
         <h3>Socials</h3>
         <ul className={`${styles.socialsLink}`}>
          <l1>twitter</l1>
          <l1>instagram</l1>
          <l1>tiktok</l1>
         </ul>
      </div>

    </div>
  )
}

export default Footer;