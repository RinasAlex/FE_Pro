import icon from '../assets/icon.png'
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <div className="icon">
                <img src={icon} alt="icon" />
                <h2>Pallas cat studio</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Главная</Link>
                    </li>
                    <li>
                        <Link to={'/About'}>О компании</Link>
                    </li>
                    <li>
                        <Link to={'/Modal'}>Модалки</Link>
                    </li>
                    <li>Контакты</li>
                    <li>Партнеры</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header