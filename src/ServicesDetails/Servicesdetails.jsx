import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Servicesdetails = () => {
    const service = useLoaderData();
    const { name,price,img,rating,description} = service;
    return (
       <div className=" mx-auto p-4 my-8 shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
	
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={img} alt="" className="block object-cover object-center w-full rounded-md h-full dark:bg-gray-500" />
			<div className="flex items-center justify-between text-3xl mr-8">
						<h2>Price: {price}</h2>
					   <h2>	Rating: {rating}</h2>
			</div>
		</div>
		<div className="space-y-2">
		
				<h3 className="text-xl font-semibold dark:text-emerald-400">{ name}</h3>
			
			<p className="leading-snug dark:text-gray-400">{ description}</p>
		</div>
	</div>
</div>
    );
};

export default Servicesdetails;