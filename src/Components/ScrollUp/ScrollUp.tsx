import { BiUpArrowAlt } from "react-icons/bi";
import styles from "./ScrollUp.module.css";
import { useEffect, useState } from "react";

export function ScrollUP() {
  const [isScrollUp, setIsScrollUp] = useState(false);

  useEffect(() => {
    function showScroll() {
      if (window.scrollY >= 350) {
        setIsScrollUp(true);
      } else {
        setIsScrollUp(false);
      }
    }

    window.addEventListener("scroll", showScroll);

    return () => {
      window.removeEventListener("scroll", showScroll);
    };
  });

  function handleScrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <a
      onClick={handleScrollUp}
      href="#"
      className={`${styles.scrollUp} ${isScrollUp ? styles.show_scrollUp : ""}`}
    >
      <BiUpArrowAlt size={20} className={styles.scrollUp_icon} />
    </a>
  );
}
