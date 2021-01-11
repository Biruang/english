import React from 'react';

import './Button.css';

const Button: React.FC = ({children}) => {
    return(
        <button>
            {children}
        </button>
    )
}

export default Button;
