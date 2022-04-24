import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <Link style={{marginRight: '10px'}} to={'/'}>home</Link>
            <Link to={'/user/add'}>add user</Link>

        </div>
    );
};

export default Headers;