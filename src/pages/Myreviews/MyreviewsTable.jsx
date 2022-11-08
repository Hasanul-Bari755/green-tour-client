import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const MyreviewsTable = ({ myReview,handleDelete }) => {
    const {_id, userName,serviceName,img,review,rating} = myReview;
    return (
         <tr>
        <th>
          <label>
            <button onClick={()=> handleDelete(_id)}><FaRegTrashAlt className='text-red-600 text-2xl'></FaRegTrashAlt></button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
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
          <button className="btn btn-ghost btn-xs">Edit</button>
        </th>
      </tr>
    );
};

export default MyreviewsTable;