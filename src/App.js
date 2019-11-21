import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/login/Login'
import Main from './pages/main/Main'
import Reg from './pages/Reg'
import Forgot from './pages/Forgot'
import Map from './pages/Map'
import Search from './pages/Search'
import Location from './pages/Location'

//reducx
import store from './store'
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Redirect from="/" exact to="/home" />
            <Route path="/home" component={Main}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/reg" component={Reg}></Route>
            <Route path="/forgot" component={Forgot} />
            <Route path="/map" component={Map} />
            <Route path="/search" component={Search} />
            <Route path="/location" component={Location} />
            <Route component={() => <div>404</div>} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}




