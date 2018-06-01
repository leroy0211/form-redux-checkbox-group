import * as React from 'react';

const ReduxCheckbox = (Component) => ({input, ...props}) => {
    return <Component {...{...input, ...props}} />
};

export default ReduxCheckbox;