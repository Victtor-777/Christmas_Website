import { BiGridAlt, BiX } from "react-icons/bi";
import styles from "./BaseHeader.module.css";
import logo from "../../assets/logo.png";
import navLights from "../../assets/nav-light.png";
import { useState } from "react";

export function BaseHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a className={styles.nav_logo} href="#">
          <img className={styles.nav_logo_img} src={logo} alt="" width={22} />
          Christimas
        </a>

        <div
          className={`${styles.nav_menu} ${isMenuOpen ? styles.show_menu : ""}`}
        >
          <ul>
            <li>
              <a onClick={closeMenu} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#celebrate">
                Celebrate
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#gifts">
                Gifts
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#new">
                New
              </a>
            </li>
          </ul>

          <div
            onClick={toggleMenu}
            className={`${styles.nav_close} ${
              isMenuOpen ? styles.show_menu : ""
            }`}
          >
            <BiX />
          </div>

          <img
            className={styles.nav_img_menu}
            src={navLights}
            width={100}
            alt=""
          />
        </div>

        <div onClick={toggleMenu} className={styles.nav_toggle}>
          <BiGridAlt size={20} />
        </div>
      </nav>
    </header>
  );
}
