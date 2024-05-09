import styles from "./Celebrate.module.css";
import celebrateImg from "../../assets/celebrate.png";

export function Celebrate() {
  return (
    <section className={`container ${styles.celebrate_section}`}>
      <div className={styles.celebrate_container}>
        <div className={styles.celebrate_info}>
          <h2>
            Celebrate With A <br /> Lot Of Love
          </h2>
          <p>
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones, friends and neighbors, wishing them a
            good Christmas message.
          </p>
          <a className="button" href="/">
            Send Good Wishes
          </a>
        </div>
        <img src={celebrateImg} alt="" />
      </div>
    </section>
  );
}
