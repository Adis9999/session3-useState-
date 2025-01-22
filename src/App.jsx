import React, { Component } from 'react'
import "./App.css"
import Counter from './components/counter'
import ColorChange from './components/colorChange'
import OffOn from './components/offOn'
const App = () => {



  return (
    <div>
      <Counter num={0}/>
      <ColorChange color1 = "red" color2="purple"/>
      <OffOn offText="OFF" onText="ON"/>
    </div>
  )
}

export default App
