import cl from './Header.module.scss';
import { ThemeSwitcher } from '../themeSwitcher';

export const Header = () => {
  return (
    <div className={cl.wrapper}>
      <h1 className={cl.header}>TODO</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
