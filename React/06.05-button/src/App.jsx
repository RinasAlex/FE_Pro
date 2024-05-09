import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomButton from './components/UI/CustomButton';


function App() {


  return (
    <>
      <CustomButton text="Click" onHandleClick={() => console.log('first Button')} size="L" />
      <CustomButton text="Click2" onHandleClick={() => console.log('first Button')} size="M" />
      <CustomButton text="Click3" onHandleClick={() => console.log('first Button')} size="XS" />
      
    </>
  )
}

export default App
