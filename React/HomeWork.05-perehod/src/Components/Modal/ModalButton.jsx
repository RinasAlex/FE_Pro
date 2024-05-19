import cls from './Modal.module.css'

function ModalButton(props){
    const {text, onHandleClick} = props
    return(
        <button className={cls.modal__btn} onClick={onHandleClick}>{text}</button>
    )
}
export default ModalButton