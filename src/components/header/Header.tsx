import moon from '../../assets/images/icon-moon.svg'
import cl from './Header.module.css'

export const Header = () => {
    return (
        <div className={cl.headerWrapper}>
            <h1 className={cl.header}>TODO</h1>
            <img
                src={moon}
                alt="themeIcon"
                className={cl.icon}
                onClick={() => console.log('Theme changed')}
            />
        </div>
    );
};

export default Header;