import { ChangeEvent } from 'react';

import { TaskType } from 'src/app/providers/store/types.ts';

import cl from './Checkbox.module.scss';

type Props = {
  task: TaskType;
  isChecked: boolean;
  onCheckboxHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({ task, isChecked, onCheckboxHandler }: Props) => {
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
