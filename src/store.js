import { createStore } from 'redux'

const store = createStore(reducre)

function reducre(state = {
    historyList: []
}, action) {
    switch (action.type) {
        case 'addHistory':
            const { historyList } = state;
            //去重
            for (let i = 0; i < historyList.length; i++) {
                const curHistoryItem = historyList[i]
                if (curHistoryItem.id === action.item.id) {
                    historyList.splice(i,1)
                    break;
                }
            }
            return {
                ...state,
                historyList: [action.item, ...historyList]
            }
        default: return state;
    }
}

export const setHistory = (item) => ({
    type: "addHistory",
    item
})

export default store;

console.log('store.getState():', store.getState());