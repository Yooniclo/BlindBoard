import React from 'react'
import ReactDOM from 'react-dom'
import BlindBoard from './BlindBoard'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import BlindBoardRead from './components/BlindBoardRead'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"} component={BlindBoard} />
      <Route path={"/read"} component={BlindBoardRead} />
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
)