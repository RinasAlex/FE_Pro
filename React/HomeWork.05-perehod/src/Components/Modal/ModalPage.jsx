import { useState } from 'react'
import cls from './Modal.module.css'
import Header from '../Header'
import ModalButton from './ModalButton'
import Modal from './Modal'
import Footer from '../Footer'


function ModalPage() {
  const [isOpened, setIsOpened] = useState(false)
  
  return (
    <>
      <Header />
      <div className={cls.modal__windows}>
        <h2>Модальные окна</h2>
        <ModalButton text='Open' onHandleClick={() => setIsOpened(!isOpened)} />
        {isOpened && <Modal onHandleClick={() => setIsOpened(!isOpened)} />}
      </div>
      <Footer />
      </>
  )
}

export default ModalPage

