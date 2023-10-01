import { ChangeEvent, FC } from 'react';
import cl from './Checkbox.module.scss';
import { TaskType } from '../../store/reducers/todo.ts';

type Props = {
  task: TaskType;
  isChecked: boolean;
  onCheckboxHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: FC<Props> = ({ task, isChecked, onCheckboxHandler }) => {
  return (
    <>
      <input
        type='checkbox'
        className={cl.checkbox}
        checked={isChecked}
        onChange={onCheckboxHandler}
        id={task.id}
        disabled={!!task.error}
      />
      <label htmlFor={task.id} className={cl.customCheckbox}></label>
    </>
  );
};
