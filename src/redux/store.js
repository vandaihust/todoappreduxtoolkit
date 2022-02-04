// import { createStore } from 'redux'
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, initialValue, enhancers)
// store có 3 giá trị vào reducer, initialValue, enhancers: middleWare; sagathunk
// const composeEnhancers = composeWithDevTools()
// const store = createStore(rootReducer, composeEnhancers);
// export default store;


//dùng redux - toolkit
import { configureStore } from '@reduxjs/toolkit'


import filterSlice from '../components/Filters/FilterSlice';
import todoListSlice from '../components/TodoList/TodoListSlice';
const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        todoList: todoListSlice.reducer
    }
})
export default store;