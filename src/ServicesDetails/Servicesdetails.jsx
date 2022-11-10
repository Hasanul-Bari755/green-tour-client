import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import AddReview from '../pages/AddReview/AddReview';
import useTitle from '../hooks/useTitle';
const Servicesdetails = () => {

	const {user} = useContext(AuthContext)
    const service = useLoaderData();
	const { _id, name, price, img, rating, description } = service;
	const [allreview, setAllreview] = useState([]);
	
	
	useTitle('Service-Details')

	useEffect(() => {
		fetch(`https://green-ture-server.vercel.app/review?serviceId=${_id}`)
		.then(res => res.json())
			.then(data => {
			setAllreview(data)
			})
		.catch(err=> console.log(err))
	},[allreview])
	
	const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.target;
		const userName = form.name.value;
		const image = form.image.value;
		const review = form.review.value;

		const date = new Date().toLocaleString();

        const myReview = {
			serviceId: _id,
			serviceName:name,
			email: user?.email || 'unregistered',
			userName,
			img: image,
			review,
			rating,
			date
			
			
		}

		fetch('https://green-ture-server.vercel.app/review', {
			method: 'POST',
			headers: {
				'content-type' : 'application/json'
			},
			body: JSON.stringify(myReview)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.acknowledged) {
					toast.success('Successfully toasted!')
					form.reset()
				}
			})
		.catch(err=> console.log(err))
	}
    return (
		<div>
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
			{/* modal button start */}
			<div className='flex justify-around'>
				 <h2 className='text-3xl text-green-600 font-semibold'>Previous Review Below</h2>
			<label  htmlFor="my-modal-3" className="btn">Add Review</label>
			 </div>

			{/* modal body  */}
			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative">
					
					{
						user?.email ?
							<>
								<label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
									<h3 className="text-lg font-bold">Please give your review!!</h3>
								<form onSubmit={handleSubmit}>
									
									<input name='name' type="text" required placeholder="Enter your name" className="input input-bordered input-secondary w-full max-w-xs mt-3" />

									<input name='Email' type="text" placeholder="Enter your name" value={user?.email} className="input input-bordered input-secondary w-full max-w-xs mt-3"  readOnly/>
									
									<input name='image' type="text" placeholder="Enter Image URL" className="input input-bordered input-secondary w-full max-w-xs mt-3" />
									
									<textarea name='review' className="textarea textarea-bordered mt-3" placeholder="Write detaild review." required></textarea>
									<button className="btn btn-sm">Place Review</button>
								</form>
							</>
							:
							<>
								<label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
								<h3 className="text-lg font-bold"> Please login to add a review!</h3>
								<div className='text-center'>
									<Link to='/login'><button class="btn btn-sm">Login</button></Link>
								</div>
							</>
					}
					
			</div>
			</div>

			{/* modal end */}

			{/* table start */}
	<div className="overflow-x-auto w-full my-10">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Image</th>
        <th>Review Text</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
	   {
		 allreview.map(review => <AddReview key={review._id} singleReview={review}></AddReview>)		
	   }
    </tbody>
  </table>
</div>
	</div>
    );
};

export default Servicesdetails;