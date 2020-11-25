import React from 'react'
import ReactDOM from 'react-dom'
import BlindBoard from './components/BlindBoard'
import BlindBoardRead from './components/BlindBoardRead'
import { BrowserRouter, Switch, Route } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={BlindBoard} />
      <Route path='/read/:id' component={BlindBoardRead} />
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
)