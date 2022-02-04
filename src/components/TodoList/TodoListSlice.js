// const initState =
//     [
//         { id: 1, name: 'Learn Redux', completed: true, priority: 'Medium' },
//         { id: 2, name: 'Learn React', completed: false, priority: 'Low' },
//         { id: 3, name: 'Learn Java', completed: false, priority: 'High' },
//     ]

import { createSlice } from "@reduxjs/toolkit";

// const todoListReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload]
//         case 'todoList/toggleToDoStatus':
//             return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)

//         default: return state
//     }
// }
// export default todoListReducer;


const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Redux', completed: true, priority: 'Medium' },
        { id: 2, name: 'Learn React', completed: false, priority: 'Low' },
        { id: 3, name: 'Learn Java', completed: false, priority: 'High' },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleToDoStatus: (state, action) => {
            state.map(todo => todo.id === action.payload ? !todo.completed : todo.completed)
        }
    }
})
export default todoListSlice