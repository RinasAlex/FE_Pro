import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ModalButton from './Components/Modal/ModalButton'
import Modal from './Components/Modal/Modal'

function App() {
  const [isOpened, setIsOpened] = useState(false)
  
  return (
    <>
      <Header />
      <div className='modal__windows'>
        <h2>Модальные окна</h2>
        <ModalButton text='Open' onHandleClick={() => setIsOpened(!isOpened)} />
        {isOpened && <Modal onHandleClick={() => setIsOpened(!isOpened)} />}
      </div>
      <Footer />
      </>
  )
}

export default App

