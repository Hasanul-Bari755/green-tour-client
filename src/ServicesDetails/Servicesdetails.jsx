import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Servicesdetails = () => {

	const {user} = useContext(AuthContext)
    const service = useLoaderData();
	const { _id, name, price, img, rating, description } = service;
	
	const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.target;
		const name = form.name.value;
		const image = form.image.value;
		const review = form.review.value;
		
		const myReview = {
			serviceId: _id,
			email: user?.email || 'unregistered',
			name,
			img: image,
			review,
			rating
		}

		fetch('http://localhost:5000/review', {
			method: 'POST',
			headers: {
				'content-type' : 'application/json'
			},
			body: JSON.stringify(myReview)
		})
			.then(res => res.json())
			.then(data => {
			console.log(data)
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
		
			<label htmlFor="my-modal-3" className="btn">Add Review</label>

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative">
					
					{
						user?.email ?
							<>
								<label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
									<h3 className="text-lg font-bold">Please give your review!!</h3>
								<form onSubmit={handleSubmit}>
									
									<input name='name' type="text" placeholder="Enter your name" className="input input-bordered input-secondary w-full max-w-xs mt-3" />
									
									<input name='image' type="text" placeholder="Enter Image URL" className="input input-bordered input-secondary w-full max-w-xs mt-3" />
									
									<textarea name='review' className="textarea textarea-bordered mt-3" placeholder="Write detaild review." required></textarea>
									<button className="btn btn-sm">Place Review</button>
								</form>
							</>
							:
							<>
								<label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2"><Link to='/login'>✕</Link></label>
								<h3 className="text-lg font-bold"> Please login to add a review!</h3>
							</>
					}
					
			</div>
			</div>
	   </div>
    );
};

export default Servicesdetails;