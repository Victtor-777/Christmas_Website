import styles from "./Home.module.css";
import homeImg from "../../assets/home.png";

export function Home() {
  return (
    <section className={`container ${styles.home_section}`}>
      <div className={styles.home_container}>
        <img src={homeImg} alt="" />
        <div className={styles.home_data}>
          <h1>Merry Christmas and Happy New Year!</h1>
          <p>
            Christmas and a new year is about to begin, all good wishes and
            successes.
          </p>
          <a className="button" href="#">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
