// Reference : https://deminoth.github.io/redux/

import { createStore } from 'redux'

// reducer
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// API are{ subscribe, dispatch, getState }
let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

// dispatch action to update the state in 'store'
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'DECREMENT' })
// 0
