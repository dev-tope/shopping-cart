import AppNav from "./AppNav"

import styles from "../styles/footer.module.css"
import navStyles from "../styles/appNav.module.css"

const Footer = () => {
  return (
    <div className={`${styles.footer} ${navStyles.footer} ${"btn"}`}>
      <div>
        <h2 className="bl fontL bold">UrbanAura</h2>
      </div>
      <nav>
        <AppNav />
      </nav>
      <div className={`${styles.social}`}>
         <h3 className={`${"fontM"} ${"bold"}`}>Socials</h3>
         <ul className={"fontS"}>
          <l1>twitter</l1>
          <l1>instagram</l1>
          <l1>tiktok</l1>
         </ul>
      </div>

    </div>
  )
}

export default Footer;