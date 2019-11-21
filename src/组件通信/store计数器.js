import { createStore } from 'redux'
import Login from '../pages/login/Login';

const store = createStore(reducer);

function reducer(state = 0, action) {
    switch (action.type) {
        case 'addNum':
            return state += action.n;
    }
}

const actionObj = {
    type: "addNum",
    n: 1
}

store.dispatch(actionObj)
store.dispatch(actionObj)
store.dispatch(actionObj)
store.dispatch(actionObj)

console.log(store.getState());
