import React, { Component } from 'react'
import Child1 from './Child1'
// import './store计数器'
import store from './store'
import { Provider } from 'react-redux'

export default class Parent extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Child1 />
                </Provider>
            </div>
        )
    }
}
