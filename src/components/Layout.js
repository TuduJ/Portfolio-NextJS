import React from 'react';

const Layout = (props) => {
    const {children, className} = props;
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
            {children}
        </div>
    );
}

export default Layout;