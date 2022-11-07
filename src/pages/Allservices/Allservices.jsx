import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allservicescard from '../AllservicesCard/Allservicescard';

const Allservices = () => {
    const allServices = useLoaderData();
    return (
        <div className='my-8'>
                 <h2 className='text-center text-5xl underline decoration-dotted mb-6 text-green-600'>All Popular Tours</h2>
            <div className='grid grid-cols-3 gap-6 my-6'>
                {
                    allServices.map(service => <Allservicescard key={service._id} service={service}></Allservicescard>)
                }
            </div>
        </div>
    );
};

export default Allservices;