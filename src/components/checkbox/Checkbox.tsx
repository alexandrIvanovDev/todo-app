import { ChangeEvent, FC } from 'react';
import cl from './Checkbox.module.scss';

type Props = {
  id: string;
  isChecked: boolean;
  onCheckboxHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: FC<Props> = ({ id, isChecked, onCheckboxHandler }) => {
  return (
    <>
      <input
        type='checkbox'
        className={cl.checkbox}
        checked={isChecked}
        onChange={onCheckboxHandler}
        id={id}
      />
      <label htmlFor={id} className={cl.customCheckbox}></label>
    </>
  );
};
