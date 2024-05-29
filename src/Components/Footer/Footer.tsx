import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import available1 from "../../assets/aviable1.png";
import available2 from "../../assets/aviable2.png";
import decoration1 from "../../assets/footer1.png";
import decoration2 from "../../assets/footer2.png";

export function Footer() {
  return (
    <footer className={`container ${styles.footer_section}`}>
      <div className={styles.footer_container}>
        <div className={styles.footer_item}>
          <div className={styles.footer_logo}>
            <img src={logo} alt="" />
            <h3>Christmas</h3>
          </div>
          <p>
            This Christmas give <br />a lot of love
          </p>
        </div>
        <div className={styles.footer_item}>
          <h3>Our Services</h3>
          <ul>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Discounts</a>
            </li>
            <li>
              <a>Shippingmode</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_item}>
          <h3>Support</h3>
          <ul>
            <li>
              <a>FAQs</a>
            </li>
            <li>
              <a>Support center</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_available}>
          <h3>Available On</h3>
          <img src={available1} alt="Google Play" />
          <img src={available2} alt="App Store" />
        </div>

        <img className={styles.footer_decoration1} src={decoration1} alt="" />
        <img className={styles.footer_decoration2} src={decoration2} alt="" />
      </div>

      <p className={styles.footer_copyright}>©Christmas. All rigths reserved</p>
    </footer>
  );
}
