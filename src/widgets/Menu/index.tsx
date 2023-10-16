import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './index.module.scss';

interface IMenuProps {
    className: string;
}

const Menu: React.FC<IMenuProps> = ({ className }) => {
    const classLink = (path: string) =>
        `${styles.link} ${
            window.location.pathname === path ? styles.activeLink : ''
        }`;

    return (
        <nav className={className}>
            <NavLink className={classLink('.')} to="." end>
                Page1
            </NavLink>
            <NavLink className={classLink('/Page2')} to="Page2">
                Page2
            </NavLink>
        </nav>
    );
};

export default Menu;
