import { configureStore } from '@reduxjs/toolkit';
import todoReducers from '../Features/Todo/TodoSlice';

export const store = configureStore({
    reducer:
        todoReducers,
});