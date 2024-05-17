import styles from "./Message.module.css";
import msgImg from "../../assets/message.png";

export function Message() {
  return (
    <section className={`${styles.section_message}`}>
      <div className={styles.message_container}>
        <form action="">
          <h2>
            Send Good <br /> Wishes!
          </h2>
          <input type="email" placeholder="Write your message" />
          <button className={`button ${styles.message_button}`}>
            Send Message
          </button>
        </form>

        <img src={msgImg} alt="" />
      </div>
    </section>
  );
}
