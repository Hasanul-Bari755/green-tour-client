import React from 'react';

const Blog = () => {
    return (
        <div className='mb-7'>
             <div className='lg:w-[95%] lg:mx-auto lg:mt-3 grid lg:grid-cols-2 md:grid-cols-2 lg:gap-3  grid-cols-1'>
           <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	        <article>
		  <h2 className="text-xl font-bold"> Difference between SQL and NoSQL?</h2>
		   <p className="mt-4 dark:text-gray-400">SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.

            The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.

            Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.</p>
		
	     </article>
        </div>
           <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	        <article>
		  <h2 className="text-xl font-bold">What is JWT, and how does it work?</h2>
                    <p className="mt-4 dark:text-gray-400">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                    <p className="mt-4 dark:text-gray-400">So JWT was built by some developers in Microsoft, they built it initially for information exchange, and later on it was repurposed for authorization.

            In security processes, authentication validates a user's identity, it also grants that user permission to access a resource.
            JWT is a stateless session, so it does not need to be saved in a database in the server-side like cookies, it only exists in the client side.</p>
                   
		
	     </article>
        </div>
           <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	        <article>
		  <h2 className="text-xl font-bold">What is the difference between javascript and NodeJS?</h2>
		   <p className="mt-4 dark:text-gray-400"> JavaScript : 
            Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. .</p>
		   <p className="mt-4 dark:text-gray-400">NodeJS : 
            NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                    
	     </article>
        </div>
           <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
	        <article>
		  <h2 className="text-xl font-bold">How does NodeJS handle multiple requests at the same time?</h2>
                    <p className="mt-4 dark:text-gray-400">Node.js, a JavaScript runtime for building server-side or desktop applications.</p>
                    <p className='mt-4 dark:text-gray-400'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads modul</p>
		
	     </article>
        </div>
    </div>
        </div>
    );
};

export default Blog;