import { BiHeart } from "react-icons/bi";
import styles from "./Gift.module.css";
import gift1 from "../../assets/gift1.png";
import gift2 from "../../assets/gift2.png";
import gift3 from "../../assets/gift3.png";
import gift4 from "../../assets/gift4.png";
import gift5 from "../../assets/gift5.png";
import gift6 from "../../assets/new2.png";

export function Gift() {
  return (
    <section id="#gift" className={`container ${styles.gift_section}`}>
      <h2>Share a Gift</h2>

      <div className={styles.gift_items}>
        <div className={styles.gift_item}>
          <BiHeart className={styles.gift_item_img} />
          <img src={gift1} alt="" />
          <span>$15</span>
          <p>Gingerbread</p>
        </div>
        <div className={styles.gift_item}>
          <BiHeart />
          <img src={gift2} alt="" />
          <span>$22</span>
          <p>Santa Claus Hat</p>
        </div>
        <div className={styles.gift_item}>
          <BiHeart />
          <img src={gift3} alt="" />
          <span>$48</span>
          <p>Christmas Tree</p>
        </div>
        <div className={styles.gift_item}>
          <BiHeart />
          <img src={gift4} alt="" />
          <span>$35</span>
          <p>Snowman</p>
        </div>
        <div className={styles.gift_item}>
          <BiHeart />
          <img src={gift5} alt="" />
          <span>$12</span>
          <p>Candy Stick</p>
        </div>
        <div className={styles.gift_item}>
          <BiHeart />
          <img src={gift6} alt="" />
          <span>$20</span>
          <p>Snow Globe</p>
        </div>
      </div>
    </section>
  );
}
