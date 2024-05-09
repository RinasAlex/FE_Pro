


function CustomButton(props) {
    const { text, onHandleClick, size } = props
    console.log(props);
    return <button className={`btn ${size}`} onClick={onHandleClick}>
        {text}
    </button>
}

export default CustomButton