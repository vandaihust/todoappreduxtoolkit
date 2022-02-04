// const initState = {
//     search: '',
//     status: 'All',
//     priority: [],
// }
// const filterReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filter/searchTodo':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filter/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filter/priorityFilterChange':
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default: return state
//     }
// }
// export default filterReducer;


//dùng redux- toolkit
import { createSlice } from "@reduxjs/toolkit";



const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: 'All',
        priority: [],
    },
    reducers: {
        //viết theo kiểu mutation nhưng kết quả cho ra là immutation do toolkit dùng thư viện IMMER
        searchTodo: (state, action) => {
            state.search = action.payload
        }, //type: 'filter/searchTodo'
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityFilterChange: (state, action) => {
            state.priority = action.payload
        },
    }
})
export default filterSlice;