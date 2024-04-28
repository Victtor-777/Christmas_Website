import { BiGridAlt, BiMoon } from "react-icons/bi";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <header className={``}>
      <nav>
        <a href="">
          <img src={logo} alt="" width={22} />
          Christimas
        </a>

        <div>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Celebrate</a>
            </li>
            <li>
              <a href="">Gifts</a>
            </li>
            <li>
              <a href="">New</a>
            </li>
          </ul>
          <img src="" alt="" />
        </div>

        <div>
          <BiMoon size={20} />
          <BiGridAlt size={20} />
        </div>
      </nav>
    </header>
  );
}
