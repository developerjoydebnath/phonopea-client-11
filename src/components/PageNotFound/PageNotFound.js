import React from 'react';
import img from '../../images/pageNotFound/404.png'
import PageTitle from '../Shared/PageTitle';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='page-not-found-container'>
            <PageTitle title='404-Page Not Found' />
            <img width={300} className='mt-5' src={img} alt="" />
        </div>
    );
};

export default PageNotFound;