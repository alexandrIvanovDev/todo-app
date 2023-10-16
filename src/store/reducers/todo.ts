import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { Theme } from 'src/themeProvider/lib/ThemeContext.ts';
import { v4 } from 'uuid';

export const slice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [],
    filter: 'all',
    error: null,
    theme: Theme.DARK,
  } as InitialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const task: TaskType = { id: v4(), text: action.payload, checked: false };
      if (action.payload.trim() === '') {
        state.error = 'Error, the task title cannot be empty';
        return;
      }
      state.tasks.push(task);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    changeTaskStatus: (
      state,
      action: PayloadAction<{ id: string; checked: boolean }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.checked = action.payload.checked;
      }
    },
    clearCompletedTask: (state) => {
      state.tasks = state.tasks.filter((t) => !t.checked);
    },
    changeFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
    changeTaskText: (
      state,
      action: PayloadAction<{ id: string; text: string }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        if (action.payload.text !== '') {
          task.text = action.payload.text;
        } else {
          task.error = 'Error, the task title cannot be empty';
        }
      }
    },
    setReorderTasks: (state, action: PayloadAction<Array<TaskType>>) => {
      state.tasks = action.payload;
    },
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setTaskError: (
      state,
      action: PayloadAction<{ id: string; error: null | string }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.error = null;
      }
    },
    setError: (state, action: PayloadAction<null | string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  changeTaskStatus,
  clearCompletedTask,
  changeFilter,
  changeTaskText,
  setReorderTasks,
  changeTheme,
  setTaskError,
  setError,
} = slice.actions;

export default slice.reducer;

//types
export type TaskType = {
  id: string;
  text: string;
  checked: boolean;
  error?: null | string;
};

export type FilterType = 'active' | 'all' | 'completed';

type InitialState = {
  tasks: TaskType[];
  filter: FilterType;
  error: null | string;
  theme: Theme;
};
