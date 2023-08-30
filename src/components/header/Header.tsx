import cl from './Header.module.css'
import {ThemeSwitcher} from '../themeSwitcher/ThemeSwitcher.tsx';

export const Header = () => {
    return (
        <div className={cl.headerWrapper}>
            <h1 className={cl.header}>TODO</h1>
            <ThemeSwitcher/>
        </div>
    );
};

export default Header;