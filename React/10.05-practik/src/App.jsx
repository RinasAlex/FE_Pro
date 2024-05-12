
import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import CustomButton from './Components/UI/CustomButton'
import Modal from './Components/Modal/Modal'
import TextBlock from './Components/TextBlock'
import Posts from './Components/Posts'

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [isOpenedText, setIsOpenedText] = useState(false)
  const [isListOpened, setIsListOpened] = useState(false)
  return (
    <>
      <Counter />
      <CustomButton text='click' onHandleClick={() => setIsOpened(!isOpened)} />
      {
        isOpened && <Modal onHandleClick={() => setIsOpened(!isOpened)} />
      }

      <CustomButton text='open text' onHandleClick={() => setIsOpenedText(!isOpenedText)} />
      {
        isOpenedText && <TextBlock title='title' description='description' />
      }

      <CustomButton  text='open List' onHandleClick={() => setIsListOpened(!isListOpened)}/>
      {
        isListOpened && <Posts />
      }
    </>
  );
}

export default App;