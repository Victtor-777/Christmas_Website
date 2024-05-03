import { BiGridAlt, BiX } from "react-icons/bi";
import logo from "../../assets/logo.png";
import navLight from "../../assets/nav-light.png";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleClickMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scroll_header : ""}`}
    >
      <nav className={styles.nav}>
        <a className={styles.nav_logo} href="#">
          <img src={logo} alt="" />
          Christimas
        </a>

        <div
          className={`${styles.nav_menu} ${isMenuOpen ? styles.show_menu : ""}`}
        >
          <ul>
            <li>
              <a onClick={handleClickMenu} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={handleClickMenu} href="#celebrate">
                Celebrate
              </a>
            </li>
            <li>
              <a onClick={handleClickMenu} href="#gifts">
                Gifts
              </a>
            </li>
            <li>
              <a onClick={handleClickMenu} href="#new">
                New
              </a>
            </li>
          </ul>

          {/* Nav Close */}
          <div onClick={handleClickMenu} className={styles.nav_close}>
            <BiX />
          </div>

          <img
            className={styles.nav_decoration}
            width={100}
            src={navLight}
            alt=""
          />
        </div>

        {/* Nav Toggle */}
        <div onClick={handleClickMenu} className={styles.nav_toggle}>
          <BiGridAlt />
        </div>
      </nav>
    </header>
  );
}
