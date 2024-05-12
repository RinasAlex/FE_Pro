function ModalButton(props){
    const {text, onHandleClick} = props
    return(
        <button className="modal__btn" onClick={onHandleClick}>{text}</button>
    )
}
export default ModalButton