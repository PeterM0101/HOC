import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import '../Header.scss';

export interface CustomNavLinkProps {
    title: string,
    path: string
}

const CustomNavLink: FC<CustomNavLinkProps> = ({title, path}) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                isActive ? classNames('nav__link', 'nav__link--active') : 'nav__link'}
        >
            {title}
        </NavLink>
    );
};

export default CustomNavLink;
