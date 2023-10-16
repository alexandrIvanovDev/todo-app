import { ThemeSwitcher } from 'src/components/themeSwitcher';

import cl from './Header.module.scss';

export const Header = () => {
  return (
    <div className={cl.wrapper}>
      <h1 className={cl.header}>TODO</h1>
      <ThemeSwitcher />
    </div>
  );
};
