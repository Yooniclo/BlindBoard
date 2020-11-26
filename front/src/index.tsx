import React from 'react'
import ReactDOM from 'react-dom'
import BlindBoard from './components/BlindBoard'
import BlindBoardRead from './components/BlindBoardRead'
import BlindBoardWrite from './components/BlindBoardWrite'
import { BrowserRouter, Switch, Route } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={BlindBoard} />
      <Route path='/read/:id' component={BlindBoardRead} />
      <Route path='/write' component={BlindBoardWrite} />
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
)