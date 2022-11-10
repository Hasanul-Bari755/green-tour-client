import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://green-ture-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div className='my-8'>
            <h2 className='text-center text-5xl underline decoration-dotted mb-6 text-green-600'>Popular Tours</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className='text-center my-4'>
                <Link to='/allservices'><button className="btn  btn-success font-bold bg-green-400 text-black">See all</button></Link>
               
           </div>
        </div>
    );
};

export default Services;