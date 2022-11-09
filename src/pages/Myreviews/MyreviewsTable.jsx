import React, { useContext } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyreviewsTable = ({ myReview,handleDelete }) => {
    const { _id, userName, serviceName, img, review, rating } = myReview;
    const {user} = useContext(AuthContext)
    
     const handleSubmit = (event) => {
        event.preventDefault()
		const form = event.target;
		const userName = form.name.value;
		const image = form.image.value;
        const review = form.review.value;
        
        const updateReview = {
            userName,
            img:image,
            review,
        }
       
    }

    
   
    return (
        <>
         <tr>
        <th>
          <label>
            <button onClick={()=> handleDelete(_id)}><FaRegTrashAlt className='text-red-600 text-2xl'></FaRegTrashAlt></button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img  src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
                <div className="font-bold">{ userName}</div>
              
            </div>
          </div>
        </td>
        <td>
                <p className='text-green-600 font-semibold'>{ serviceName}</p>
          <br/>
                <span className="badge badge-ghost badge-sm">Rating {rating}</span>
        </td>
            <td>{review }</td>
        <th>
          <Link to={`/reviewupdate/${_id}`}><button className='btn btn-ghost'>Edit</button></Link>
        </th>
            </tr>




        </>
    );
};

export default MyreviewsTable;