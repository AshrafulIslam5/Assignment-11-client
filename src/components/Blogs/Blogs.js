import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center text-3xl mt-12'>Question Answer</h2>
            <div className='my-10 px-20 bg-fuchsia-400 text-black py-3 w-4/5 mx-auto rounded-lg'>
                <h2 className='text-2xl'>Difference between javascript and nodejs?</h2>
                <h2><strong>Ans: </strong>JavaScript is a simple Programming language for browser work. We can do others as well. While Node Js is an interpreter or running environment for a JavaScript. It holds benefits such as ability to handle multiple requests, ability to scale smoothly, asynchronous and event-driven etc. So we can say that Javascript is a language and node js is a running environment for JavaScript which makes using javascript easy and fast.</h2>
            </div>
            <div className='my-10 px-20 bg-lime-500 text-black py-3 w-4/5 mx-auto rounded-lg'>
                <h2 className='text-2xl'> When should you use nodejs and when should you use mongodb?</h2>
                <h2><strong>Ans: </strong>Well, Node js was made for website development back-end and for Api servers and creation. For Mongo db, Mongodb is used to store database in a cloud based space that will never go away and can be accessed anytime.</h2>
            </div>
            <div className='my-10 px-20 bg-blue-500 text-white py-3 w-4/5 mx-auto rounded-lg'>
                <h2 className='text-2xl'>What is the purpose of jwt and how does it work?</h2>
                <h2><strong>Ans: </strong>JWT stands for Javascript Web Token. It is used to share security information beteween client and server. Mainly we can say it's also used for authentication. When a user tries to login the application, the application creates JWT and sends it to the user. The Token indicates which routes and location the user is allowed to him</h2>
            </div>
        </div>
    );
};

export default Blogs;