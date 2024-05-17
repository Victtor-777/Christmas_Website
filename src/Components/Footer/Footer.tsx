import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className={`container ${styles.footer_section}`}>
      <div className={styles.footer_container}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>©Christmas. All rigths reserved</p>
    </footer>
  );
}
