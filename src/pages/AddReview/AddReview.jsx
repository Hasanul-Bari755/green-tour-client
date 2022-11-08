import React from 'react';

const AddReview = ({ singleReview }) => {
    const {img,name,rating,review } = singleReview;
    return (
        
            <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center space-x-3">
            
            <div>
                <div className="font-bold">{ name}</div>
            
            </div>
          </div>
        </td>
        <td>
        <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
            <img src={ img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
            <td>{review}</td>
        <th>
          <p>{ rating}</p>
        </th>
      </tr>
    
    );
};

export default AddReview;