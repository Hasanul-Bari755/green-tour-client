import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import MyreviewsTable from './MyreviewsTable';

const Myreviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [updateUser, setupdateUser] = ([])
    console.log(updateUser)
   

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization : `Bearer ${localStorage.getItem('greenJwt-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
            setMyReviews(data)
            })
        .catch(err=> console.log(err))
    }, [user?.email])
    
    const handleDelete = (id) => {

        const process = window.confirm('Are you sure want to delete?')
        if (process) {
                fetch(`http://localhost:5000/review/${id}`, {
                    method: 'DELETE',
                    headers: {
                      authorization : `Bearer ${localStorage.getItem('greenJwt-token')}`
                    }
           })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = myReviews.filter(rew => rew._id !== id);
                    setMyReviews(remaining)
                    toast.success('Successfully delete!')
                }
        })
        }

     
    }

    

    return (
       
        <div>
         {
                myReviews.length === 0 ? 
                
                   <div className='flex justify-center items-center pt-16 '>
                          <p className='text-center text-4xl'>No reviews were added</p>  
                  </div>  
                 
                    : 
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
            <thead>
                <tr>
                    <th>
                    <label>
                    <h1>DELETE</h1>
                    </label>
                    </th>
                    <th>Profile Info</th>
                    <th>Service Info</th>
                    <th>Review</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
          {
                     myReviews.map(myReview => <MyreviewsTable
                         key={myReview._id}
                         myReview={myReview}
                         handleDelete={handleDelete}>
                         setupdateUser={setupdateUser}
                 
             </MyreviewsTable>)       
          }          
    </tbody>
    </table>
     </div>        
        }
       </div>
    );
};

export default Myreviews;