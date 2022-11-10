import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const reviews = useLoaderData();
    const {_id, img, userName, email, review } = reviews;
   
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const imageUrl = form.imageURL.value;
        const review = form.review.value;

        const updateReview = {
            userName:userName,
            img: imageUrl,
            review:review
        }
        console.log(updateReview)
         fetch(`https://green-ture-server.vercel.app/updatereview/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                 authorization : `Bearer ${localStorage.getItem('greenJwt-token')}`
            },
            body:JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    navigate('/myreviews')
                }
        })
       
    }

  
   
    return (
        <div>
            <form onSubmit={handleSubmit} className='bg-gray-700 py-10 w-1/2 mx-auto rounded mb-10'>
                <div className='text-center'>
                    <input name='name' type="text" defaultValue={userName} placeholder="User Name" className="rounded border border-indigo-600 w-96 h-9 p-4" />
                </div>
                <div className='text-center mt-8'>
                    <input name='imageURL' type="text" defaultValue={img} placeholder="Image Url" className="rounded border border-indigo-600 w-96 h-9 p-4" />
                </div>
                <div className='text-center mt-8'>
                    <textarea name='review' defaultValue={review} className="rounded border border-indigo-600 w-96 h-9 p-4" placeholder="Review"></textarea>
                </div>
                <div className='text-center mt-9'>
                    <button type='submit' className="btn btn-accent font-bold">Update</button>
                </div>
           </form>
        </div>
    );
};

export default Update;