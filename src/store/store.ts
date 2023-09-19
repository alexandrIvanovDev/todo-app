import {combineReducers, configureStore} from '@reduxjs/toolkit'
import todo from './reducers/todo.ts';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'tasks',
    storage,
}

const rootReducer = combineReducers({
    todo: todo
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector