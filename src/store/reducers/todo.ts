import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {v4} from 'uuid';

export const LOCAL_STORAGE_TASKS_KEY = 'tasks'

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
            localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(state.tasks))
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
            localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(state.tasks))
        },
        changeTaskStatus: (state, action: PayloadAction<{ id: string, checked: boolean }>) => {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.checked = action.payload.checked
            }
            localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(state.tasks))
        },
        clearCompletedTask: (state) => {
            state.tasks = state.tasks.filter(t => !t.checked)
            localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(state.tasks))
        },
        changeFilter: (state, action: PayloadAction<FilterType>) => {
            state.filter = action.payload
        },
        changeTaskText: (state, action: PayloadAction<{ id: string, text: string }>) => {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) {
                task.text = action.payload.text
            }
            localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(state.tasks))
        },
        setReorderTasks: (state, action: PayloadAction<Array<TaskType>>) => {
            state.tasks = action.payload
            localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(state.tasks))
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