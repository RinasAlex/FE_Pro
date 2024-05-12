import { useState } from 'react'
import ModalButton from "./ModalButton"
import ModalContent from "./ModalContent"
import {datenList} from './daten'
import cls from './Modal.module.css'

function Modal(props) {
    const [daten] = useState(datenList)
    return (
        <div className={cls.modal}>
            <div className={cls.modal__content}>
                <div className={cls.modal__item}>
                {daten.map((item, index) => (
                    <ModalContent name={item.name} email={item.email} phone={item.phone} key={index} />
                ))}
                </div>
                <ModalButton text='close' onHandleClick={props.onHandleClick} />
            </div>
        </div>
    )
}

export default Modal