import {configureStore} from '@reduxjs/toolkit'
import todo from './reducers/todo.ts';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const store = configureStore({
    reducer: {todo}
})

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector