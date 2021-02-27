import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import fakeData from '../../fakedata/data.json'
import './User.css'

const User = () => {
    const [users,setUser] = useState([]);
    const [friend,setFriend] = useState([]);

    useEffect(() =>{
        setUser(fakeData);
        // console.log(fakeData)
      },[])
      const handleAddClick = (fr) => {
          const newFriend = [...friend,fr];
          setFriend(newFriend);
      }
     const totalPrice = friend.reduce((total,salary)=> total + salary.salary,0)
    return (
        <div className = 'user'>
            <div className='friend'>
                <h3>Total {users.length} </h3>
                {
                    users.map((user) => <Friend handleAddClick = {handleAddClick} user = {user} key= {user.id} />)
                }
            </div>
            <div className='cart'>
                <h1>Friends : {friend.length} </h1>
                <h4>Anual Salary: {totalPrice} </h4>
            </div>
        </div>
    );
};

export default User;