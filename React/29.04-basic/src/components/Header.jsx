function Header(props) {
    const arr = ['Burger', 'Hello', 'Sun', 'Small']
    return (
        <header>
            <h4>We need:</h4>
            <ul>
                {arr.map((elem, index) => (
                    <li key={index}> {elem}</li>
                ))}
            </ul>
        </header>
    )
}
export default Header