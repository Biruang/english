import React from 'react';

import './CenteredLayout.css';

const CenteredLayout: React.FC = ({children}) => {
    return(
        <div className="centered-layout-container">
            {children}
        </div>
    )
}

export default CenteredLayout;
