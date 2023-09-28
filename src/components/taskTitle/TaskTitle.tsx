import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskText, TaskType } from '../../store/reducers/todo.ts';
import cl from './TaskTitle.module.scss';

type TaskTitle = {
  task: TaskType;
  value: string;
  setValue: (value: string) => void;
};
export const TaskTitle: FC<TaskTitle> = ({ task, value, setValue }) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
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
          type='text'
          value={value}
          onChange={onChangeValue}
          onBlur={closeEditMode}
          className={cl.input}
          onKeyDown={onEnterHandler}
          autoFocus
          data-testid='input'
        />
      ) : (
        <span
          className={cl.text}
          onDoubleClick={editTask}
          title='Double click to change the task title'
          data-testid='span'
        >
          {value}
        </span>
      )}
    </>
  );
};
