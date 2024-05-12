import icon from '../assets/icon.png'


function Header(props) {
    return (
        <header>
            <div className="icon">
                <img src={icon} alt="icon" />
                <h2>Pallas cat studio</h2>
            </div>
            <nav>
                <ul>
                    <li>Главная</li>
                    <li>О компании</li>
                    <li>Модалки</li>
                    <li>Контакты</li>
                    <li>Партнеры</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header