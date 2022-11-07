import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div className='my-8'>
            <h2 className='text-center text-5xl underline decoration-dotted mb-6 text-green-600'>Popular Tours</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className='text-center my-4'>
                <button className="btn  btn-success font-bold bg-green-400 text-black">See All</button>
           </div>
        </div>
    );
};

export default Services;