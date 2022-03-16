import React, { Component } from 'react'
import Home from './components/Home/Home'
import Movies from './components/Movies/Movies'
import Navbar from './components/Navbar/Navbar'
import Tv from './components/Tv/Tv'
import {Redirect,Route,Switch} from "react-router-dom"
import Notfound from './components/Notfound/Notfound'
import Register from './components/Register/Register'

export default class App extends Component {
  render() {
    return (
      <>

        <Navbar/>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/register' component={Register}/>
          <Route path='/movies' component={Movies}/>
          <Route path='/tv' component={Tv}/>
          <Redirect exact from='/' to='/register' />
          <Route path='*' component={Notfound}/>
        </Switch>
      </>
    )
  }
}
