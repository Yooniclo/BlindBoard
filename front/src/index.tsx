import React from 'react'
import ReactDOM from 'react-dom'
import BlindBoard from './components/BlindBoard'
import BlindBoardRead from './components/BlindBoardRead'
import BlindBoardWrite from './components/BlindBoardWrite'
import BlindBoardSignin from './components/BlindBoardSignin'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ModalProvider } from './context/ModalContext'
import { TokenProvider } from './context/TokenContext'

ReactDOM.render(
  <BrowserRouter basename="/blindboard">
    <Switch>
      <TokenProvider>
        <Route exact path='/' component={BlindBoard} />
        <ModalProvider>
          <Route path='/signin' component={BlindBoardSignin} />
          <Route path='/write' component={BlindBoardWrite} />
          <Route path='/read/:id' component={BlindBoardRead} />
        </ModalProvider>
      </TokenProvider>
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
)