import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className='container pt-4'>
                <h4 className='questions'>
                    1. Difference between javascript and nodejs
                </h4>
                <p className='answers'>Ans: we use javascript for front end and nodejs for backend. javascript run with browser it is a programming language and nodejs run outside of the browser it is a javascript runtime. javascript id used for the client side and nodejs is used for the  server side. nodejs connect database with client side.</p>
                <h4 className='questions'>
                    2. When should you use nodejs and when should you use mongodb
                </h4>
                <p className='answers'>Ans: nodejs is a javascript runtime. it is used to exchange data between client side and server side. when we need to send data form client site to database or load data from database we use nodejs. on the other hand mongodb is a database. it is used store data of a website. it is a storage. when we need to store data we use mongodb.</p>
                <h4 className='questions'>
                    3. Differences between sql and nosql databases.
                </h4>
                <p className='answers'>Ans: sql means sequel database and nosql means not sequel database. sql database is a static database and nosql is a dynamic database. sql have a fixed schema but nosql don't have any static schema. sql databases are good for complex queries but nosql databases are not so good for complex queries</p>
                <h4 className='questions'>
                    4. What is the purpose of jwt and how does it work
                </h4>
                <p className='answers'>Ans: jwt is the short form of json web token. it is a security system for protecting data from others. it is used to secure the api's. if we donot use jwt anyone can access our website data and it could be dangerous for both user and owner. it is a token system security system. first of all we have to create a security key. then using that key we have to generate a token using jwt while logging in and the token will be saved in localstorage or cookeis for a certain time. when a user login a token is generated with the security key. and then jwt tries verify the token with security key. if matched user can access the api.</p>
            </div>
        </div>
    );
};

export default Blogs;