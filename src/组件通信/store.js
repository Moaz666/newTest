import { createStore } from 'redux'

const store = createStore(reducer)

function reducer(state = {
    name: "王五",
    sex: "男"
}, action) {
    switch (action.type) {
        case "changesex":
            return {
                ...state,
                sex: action.sex
            }
        default:
            return state;
    }
}

//action创建函数
export const changeSexAction = (sex) => ({
    type: 'changeSex',
    sex
})

export default store
