import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className= " w-8/9 md:w-5/6 mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;