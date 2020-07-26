import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/style.scss'
//Components are saved in different files
ReactDOM.render(<IndecisionApp subtitle='Put your life in hands of computer'/>,document.querySelector('#app'))
