import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {v4} from 'uuid';

export type TaskType = {
    id: string
    text: string
    checked: boolean
}

export type FilterType = 'all' | 'active' | 'completed'

type InitialState = {
    tasks: TaskType[]
    filter: FilterType
    error: string | null
}

const initialState: InitialState = {
    tasks: [
        {id: v4(), text: 'Complete online JS course', checked: true},
        {id: v4(), text: '10 minutes meditation', checked: false},
        {id: v4(), text: 'Read for 1 hour', checked: false},
        {id: v4(), text: 'Complete Todo app', checked: false}
    ],
    filter: 'all',
    error: null
}

export const slice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const task: TaskType = {id: v4(), text: action.payload, checked: false}
            if (action.payload.trim() === '') {
                state.error = 'error'
                return
            }
            state.tasks.push(task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        changeTaskStatus: (state, action: PayloadAction<{id: string,  checked: boolean}>) => {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.checked = action.payload.checked
            }
        },
        clearCompletedTask: (state) => {
            state.tasks = state.tasks.filter(t => !t.checked)
        },
        changeFilter: (state, action: PayloadAction<FilterType>) => {
            state.filter = action.payload
        },
        changeTaskText: (state, action: PayloadAction<{id: string, text: string}>) => {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.text = action.payload.text
            }
        }
    }
})

export const {addTask, deleteTask, changeTaskStatus, clearCompletedTask, changeFilter, changeTaskText} = slice.actions

export default slice.reducer