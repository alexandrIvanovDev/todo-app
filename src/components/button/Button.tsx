import { ButtonHTMLAttributes, FC } from 'react';

import classNames from 'classnames';

import cl from './Button.module.scss';

type Button = {
  addClass?: { [key: string]: boolean } | string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Button> = (props) => {
  const { children, onClick, addClass } = props;

  return (
    <button onClick={onClick} className={classNames(cl.button, addClass)}>
      {children}
    </button>
  );
};
