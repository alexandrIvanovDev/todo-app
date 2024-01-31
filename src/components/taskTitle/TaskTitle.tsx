import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { TaskType } from 'src/app/providers/store/types.ts';
import { changeTaskText, setTaskError } from 'src/services/todo.ts';

import cl from './TaskTitle.module.scss';

type Props = {
  task: TaskType;
  value: string;
  setValue: (value: string) => void;
};

export const TaskTitle = ({ task, value, setValue }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const setErrorNull = () => {
    if (task.error) {
      dispatch(setTaskError({ id: task.id, error: null }));
    }
  };

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

  useEffect(() => {
    if (task.error) {
      setErrorNull();
    }
  }, []);

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
