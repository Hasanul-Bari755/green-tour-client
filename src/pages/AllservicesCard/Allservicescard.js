import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const Allservicescard = ({ service }) => {
    const {_id,name,img,price,rating,description } = service;
    return (
         <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                 <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='rounded' src={img} alt="" />
                    </PhotoView>
                    </PhotoProvider>
                   
                <div className="card-body">
                    <h2 className="card-title">
                     {name}
                    
                    </h2>
                    <p>{description.length > 120 ? description.slice(0, 120) + '...' : { description }}</p>
                    
                    <div className="card-actions justify-between">
                                <div className="text-green-600 text-2xl font-bold">Price: { price}$</div> 
                                <div className="text-green-600 text-2xl font-bold">Rating: {rating }</div>
                      </div>
                    <Link to={`/services/${_id}`}><button className="btn btn-sm btn-outline bg-green-400 font-bold w-full">Details</button></Link>
                </div>
                </div>
        </div>
    );
};

export default Allservicescard;