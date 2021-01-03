import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='mt-5 text-center'>
            <h2>Not Found!</h2>
            <Link to='/'>Back to home</Link>
        </div>
    );
};

export default NotFound;