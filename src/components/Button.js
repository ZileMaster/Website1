import React from "react";
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
const PATHS = ['/sign-up', '/articles'];

const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonPath}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonPath = PATHS.includes(buttonPath) ? buttonPath : PATHS[0];

    return(
        <Link to={checkButtonPath} className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
}

export default Button;