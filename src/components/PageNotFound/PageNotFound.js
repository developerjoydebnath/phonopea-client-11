import React from 'react';
import img from '../../images/pageNotFound/404.png'
import PageTitle from '../Shared/PageTitle';

const PageNotFound = () => {
    return (
        <div className='text-center'>
            <PageTitle title='404-Page Not Found' />
            <img className='mt-5' src={img} alt="" />
        </div>
    );
};

export default PageNotFound;