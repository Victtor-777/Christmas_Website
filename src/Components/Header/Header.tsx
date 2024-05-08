import { BiGridAlt, BiMoon, BiSun, BiX } from "react-icons/bi";
import logo from "../../assets/logo.png";
import navLight from "../../assets/nav-light.png";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function getSavedTheme() {
  const storedTheme = localStorage.getItem("selected_theme");
  return storedTheme === "dark";
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(getSavedTheme());
  }, []);

  function toggleTheme() {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme ? "dark" : "light";
      localStorage.setItem("selected_theme", newTheme);
      return !prevTheme;
    });
  }

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark_theme");
    } else {
      document.body.classList.remove("dark_theme");
    }
  }, [isDarkTheme]);

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
          <img className={styles.nav_logo_img} src={logo} alt="" />
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

        <div className={styles.nav_btns}>
          <div className={styles.nav_theme_btn} onClick={toggleTheme}>
            {isDarkTheme ? <BiSun size={20} /> : <BiMoon size={20} />}
          </div>

          <div onClick={handleClickMenu} className={styles.nav_toggle}>
            <BiGridAlt />
          </div>
        </div>
      </nav>
    </header>
  );
}
