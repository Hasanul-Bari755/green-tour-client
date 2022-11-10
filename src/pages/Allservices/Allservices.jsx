import React, { useEffect, useState } from 'react';

import Allservicescard from '../AllservicesCard/Allservicescard';
import useTitle from '../../hooks/useTitle';
import Loader from '../Loader/Loader';

const Allservices = () => {
     useTitle('All-Services')
    const [services, setServices] = useState([])
    const [count, setCount] = useState(0);
    const [pageNumber, setpageNumber] = useState(0);
    const [sizeOfData, setSizeOfdata] = useState(6);
    const [loading, setLoading] = useState(false);

    const pages = Math.ceil(count / sizeOfData);

    

    useEffect(() => {
        setLoading(true)
        fetch(`https://green-ture-server.vercel.app/servicesall?pageNumber=${pageNumber}&sizeOfData=${sizeOfData}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services)
                setCount(data.count)
                setLoading(false)
        })
    },[pageNumber,sizeOfData])
  
   if (loading) {
       return <Loader></Loader>
    }
    return (
       
        <div className='my-10'>
                 <h2 className='text-center text-5xl underline decoration-dotted mb-10 text-green-600 '>All Popular Tours</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-6'>
                {
                    services.map(service => <Allservicescard key={service._id} service={service}></Allservicescard>)
                }
            </div>

            {/* implement pegination */}

            <div className='text-center'>
                <div className='btn-group'>
                {
                    [...Array(pages).keys()].map(number => <button
                        className={pageNumber === number ? 'btn btn-md btn-active' : 'btn btn-md'  }
                        key={number}
                        onClick={()=> setpageNumber(number)}
                    >{number + 1}
                       
                    </button>)
                    }
                    <select onChange={event => setSizeOfdata(event.target.value)} className='ml-3'>
                        <option value="3">3</option>
                        <option value="3" selected>6</option>
                        <option value="3">9</option>
                    </select> 
            </div>
            </div>
        </div>
    );
};

export default Allservices;