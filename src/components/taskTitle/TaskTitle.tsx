import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  TaskType,
  changeTaskText,
  setTaskError,
} from 'src/store/reducers/todo.ts';

import cl from './TaskTitle.module.scss';

type TaskTitle = {
  task: TaskType;
  value: string;
  setValue: (value: string) => void;
};

export const TaskTitle: FC<TaskTitle> = ({ task, value, setValue }) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const setErrorNull = () => {
    if (task.error) {
      dispatch(setTaskError({ id: task.id, error: null }));
    }
  };

  useEffect(() => {
    setErrorNull();
  }, []);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorNull();
    setValue(e.currentTarget.value);
  };

  const closeEditMode = () => {
    setEditMode(false);
    dispatch(changeTaskText({ id: task.id, text: value }));
  };

  const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      closeEditMode();
    }
  };

  const editTask = () => {
    if (!task.checked) {
      setEditMode(true);
    }
  };

  return (
    <>
      {editMode ? (
        <input
          autoFocus
          type='text'
          value={value}
          className={cl.input}
          onBlur={closeEditMode}
          onChange={onChangeValue}
          onKeyDown={onEnterHandler}
        />
      ) : (
        <span
          className={cl.text}
          onDoubleClick={editTask}
          title='Double click to change the task title'
        >
          {value}
          {task.error && <div style={{ color: 'red' }}>{task.error}</div>}
        </span>
      )}
    </>
  );
};
