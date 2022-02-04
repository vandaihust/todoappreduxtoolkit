// import { createSelector } from 'reselect'
// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter(todo => todo.name.toLowerCase().includes(state.filter.search.toLowerCase()))
//     return todoRemaining
// };
// export const searchTextSelector = (state) => state.filter.search;
//reselect để dùng cả các selector lồng nhau
import { createSelector } from '@reduxjs/toolkit'
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter.search;
export const statusTextSelector = (state) => state.filter.status;
export const prioritySelector = state => state.filter.priority;

export const todosRemainingSeletor = createSelector(todoListSelector, statusTextSelector, searchTextSelector, prioritySelector,
    (todoList, statusText, searchText, priorityArray) => {
        return todoList.filter((todo) => {
            if (statusText === 'All') return (priorityArray.length ?
                priorityArray.includes(todo.priority) && todo.name.toLowerCase().includes(searchText.toLowerCase())
                : todo.name.toLowerCase().includes(searchText.toLowerCase()));
            return (todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
                (statusText === 'Completed' ? todo.completed : !todo.completed) &&
                (priorityArray.length ? priorityArray.includes(todo.priority) : true))
        }
        )
    })

