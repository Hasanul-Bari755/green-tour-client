import React from 'react';
import { FaPhoneAlt,FaLocationArrow,FaCalendarAlt } from "react-icons/fa";
const Contact = () => {
    return (
        <div>
            <div className='bg-black  grid grid-cols-1 lg:grid-cols-3  w-[70%] mx-auto p-16 rounded mb-10 mt-14'>
                <div className='text-white flex items-center'>
                    <FaPhoneAlt></FaPhoneAlt>
                    <div>
                        <h1><small>Have a question?</small></h1>
                        <h1>+21236541254</h1>
                    </div>
               </div>
                <div className='text-white flex items-center'>
                    <FaLocationArrow className='mr-2'></FaLocationArrow>
                    <div>
                        <h1><small>Need a service?</small></h1>
                        <h1>Mojompur,Kushtia</h1>
                    </div>
               </div>
                <div className='text-white flex items-center'>
                   <FaCalendarAlt className='mr-2'></FaCalendarAlt>
                    <div>
                        <h1><small>We are open</small></h1>
                        <h1>9.00am To 9.00pm</h1>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Contact;