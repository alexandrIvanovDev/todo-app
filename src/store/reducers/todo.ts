import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {v4} from 'uuid';

export type TaskType = {
    id: string
    text: string
    checked: boolean
}

type InitialState = {
    tasks: TaskType[]
    error: string | null
}

const initialState: InitialState = {
    tasks: [
        {id: v4(), text: 'Complete online JS course', checked: true},
        {id: v4(), text: '10 minutes meditation', checked: false},
        {id: v4(), text: 'Read for 1 hour', checked: false},
        {id: v4(), text: 'Complete Todo app', checked: false}
    ],
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
        }
    }
})

export const {addTask} = slice.actions

export default slice.reducer