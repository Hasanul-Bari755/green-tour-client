import React from 'react';
import { FaUserAlt } from "react-icons/fa";
const AddReview = ({ singleReview }) => {
    const {img,userName,rating,review } = singleReview;
    return (
        
            <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
                <div className="font-bold">{ userName}</div>
            
            </div>
          </div>
        </td>
        <td>
        {
              singleReview?.img ? 
                 <div className="flex items-center space-x-3">
            <div className="avatar">
                <div className="mask mask-squircle w-16 h-16">
                   <img src={img} alt="Avatar Tailwind CSS Component" />
                </div>
            </div>
            
                </div>
                :
                <FaUserAlt className="w-16 h-16"></FaUserAlt>
            }
        </td>
            <td>{review}</td>
        <th>
          <p>{ rating}</p>
        </th>
      </tr>
    
    );
};

export default AddReview;