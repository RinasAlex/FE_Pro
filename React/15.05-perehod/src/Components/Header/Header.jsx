import cls from './Header.module.css'
import logo from '../../assets/image 1.png'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={cls.Header}>
      <nav>
        <ul className={cls.header__ul}>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/About`}>About</Link>
          </li>
          <li>
            <Link to={`/`}>
              <img src={logo} alt="" />
            </Link>
          </li>
          <li>
            <Link to={`/Shop`}>Shop</Link>
          </li>
          <li>
            <Link to={`/Contact`}>Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;