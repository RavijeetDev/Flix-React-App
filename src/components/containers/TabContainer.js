/* Courtest of Google */

import React from 'react';

const TabContainer = props => {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}>
            {children}
        </div>
    );
}

export default TabContainer