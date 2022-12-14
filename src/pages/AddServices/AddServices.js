import React from 'react';
import swal from 'sweetalert';
import useTitle from '../../hooks/useTitle'
const AddServices = () => {
         useTitle('Addservises')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        
        if (rating > 5) {
            alert('Please rating lessthen 5')
            return;
        }

        const service = {
            name,
            img: imageURL,
            rating,
            price,
            description
        } 

        fetch('https://green-ture-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    swal("Successfully Added", "You clicked the button!", "success");
                    form.reset();
                }
        })
    }
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50 my-10">
            <h1 className='text-center text-3xl pb-5'>Please add service</h1>
	<form onSubmit={handleSubmit} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Service name</label>
					<input name='name' id="firstname" type="text" placeholder="Service name" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-400 dark:border-gray-700 dark:text-gray-900" required/>
				</div>
				
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="imageurl" className="text-sm">Image URL</label>
					<input name='imageURL' id="imageurl" type="text" placeholder="Image URL" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-400 dark:border-gray-700 dark:text-gray-900" required />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Description</label>
					<textarea name='description' id="address" type="text-area" placeholder="Service description" className="w-full h-24 rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-400 dark:border-gray-700 dark:text-gray-900" required />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">Price</label>
					<input name='price' id="city" type="text" placeholder="price" className=" textarea w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-400 dark:border-gray-700 dark:text-gray-900" required/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">Rating Out Of 5</label>
					<input name='rating' id="state" type="text" placeholder="Ration" className="w-full h-10 rounded-md focus:ring focus:ring-opacity-75 focus:ring-emerald-400 dark:border-gray-700 dark:text-gray-900" required />
                </div>
                     
				
                    </div>
                  
		</fieldset>
		  <button className="btn btn-info w-1/2">Add Service</button>
	</form>
</section>
    );
};

export default AddServices;