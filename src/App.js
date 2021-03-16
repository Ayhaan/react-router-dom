import React from 'react'
import { BrowserRouter as Browser, Redirect, Route, Switch, } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Erreur from './pages/Erreur'

// ton css
import './sass/app.sass'

export default function App() {
  return (
    < Browser>
        < Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />

          {/* Redirect */}
          <Route component={Erreur} />    
          {/* <Redirect to='/' /> */}
        </Switch>
    </Browser>
  )
}
