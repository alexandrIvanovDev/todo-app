import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {v4} from 'uuid';

export const slice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [],
        filter: 'all',
        error: null
    } as InitialState,
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
        changeTaskStatus: (state, action: PayloadAction<{ id: string, checked: boolean }>) => {
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
        changeTaskText: (state, action: PayloadAction<{ id: string, text: string }>) => {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.text = action.payload.text
            }
        },
        setReorderTasks: (state, action: PayloadAction<Array<TaskType>>) => {
            state.tasks = action.payload
        }
    }
})

export const {
    addTask,
    deleteTask,
    changeTaskStatus,
    clearCompletedTask,
    changeFilter,
    changeTaskText,
    setReorderTasks
} = slice.actions

export default slice.reducer

//types
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