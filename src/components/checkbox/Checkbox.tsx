import { ChangeEvent, FC } from 'react';

import { TaskType } from 'src/store/reducers/todo.ts';

import cl from './Checkbox.module.scss';

type Props = {
  task: TaskType;
  isChecked: boolean;
  onCheckboxHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: FC<Props> = ({ task, isChecked, onCheckboxHandler }) => {
  return (
    <>
      <input
        id={task.id}
        type='checkbox'
        checked={isChecked}
        className={cl.checkbox}
        disabled={!!task.error}
        onChange={onCheckboxHandler}
      />
      <label htmlFor={task.id} className={cl.customCheckbox}></label>
    </>
  );
};
