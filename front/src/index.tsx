import React from 'react'
import ReactDOM from 'react-dom'
import BlindBoard from './components/BlindBoard'
import BlindBoardRead from './components/BlindBoardRead'
import BlindBoardWrite from './components/BlindBoardWrite'
import BlindBoardSignin from './components/BlindBoardSignin'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ModalProvider } from './context/ModalContext'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={BlindBoard} />
      <ModalProvider>
        <Route path='/signin' component={BlindBoardSignin} />
        <Route path='/read/:id' component={BlindBoardRead} />
        <Route path='/write' component={BlindBoardWrite} />
      </ModalProvider>
      </Switch>
    </BrowserRouter>
  ,document.getElementById('root')
)