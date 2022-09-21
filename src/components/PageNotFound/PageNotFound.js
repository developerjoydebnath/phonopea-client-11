import React from 'react';
import img from '../../images/pageNotFound/404.png'
import PageTitle from '../Shared/PageTitle';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='page-not-found-container'>
            <PageTitle title='404-Page Not Found' />
            <h1 className='page-not-found-1 font-effect-shadow-multiple'>Oppppsss...!!!</h1>
            <img width={300} className='mt-3' src={img} alt="" />
            <h2 className='page-not-found-2 font-effect-shadow-multiple'>Page Not Found</h2>
        </div>
    );
};

export default PageNotFound;