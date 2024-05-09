import styles from "./Giving.module.css";
import giving1 from "../../assets/giving1.png";
import giving2 from "../../assets/giving2.png";
import giving3 from "../../assets/giving3.png";

export function Giving() {
  return (
    <section id="#giving" className={`container ${styles.giving_section}`}>
      <h2>
        Start Giving This <br /> Christmas
      </h2>
      <div className={styles.giving_container}>
        <div className={styles.giving_item}>
          <img src={giving1} alt="" />
          <h3>Surprise gifts</h3>
          <p>They are the best gifts there is</p>
        </div>
        <div className={styles.giving_item}>
          <img src={giving2} alt="" />
          <h3>Ornaments</h3>
          <p>Give a moment to decorate</p>
        </div>
        <div className={styles.giving_item}>
          <img src={giving3} alt="" />
          <h3>Lots of love</h3>
          <p>Give away feelings that last forever</p>
        </div>
      </div>
    </section>
  );
}
