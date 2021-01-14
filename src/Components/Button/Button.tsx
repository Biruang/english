import React from 'react';

import './Button.css';

interface IButton {
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean
}


const Button: React.FC<IButton> = (props) => {
    return(
        <button
            onClick={props.onClick}
            className="button"
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button;
