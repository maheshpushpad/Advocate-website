import React from 'react'
import Routess from './component/Routess'
import Header from './component/Header'
import Footer from './component/Footer'
import Whatsapp from './component/Whatsapp'
import Call from './component/Call'

const App = () => {
  return (
    <div className=''>
      <Header/>
         <Routess/>
      <Footer/>
      <Whatsapp/>
      <Call/>
    </div>
  )
}

export default App