import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUserPlus, faEnvelope,faBell } from '@fortawesome/free-solid-svg-icons'
import './Friend.css';

const Friend = (props) => {
    // console.log(props)
    const user = props.user;
    // console.log(user)
    const {name,address,email,phone,salary,img} = user;
    return (
        <div>
            <div className= 'main'>
            <div className='top'>
                <img src= {img} alt=""/>
                <p className='top-item'><FontAwesomeIcon icon={faEnvelope} /></p>
                <p className='top-item'><FontAwesomeIcon icon={faBell} /></p>
                <p className='top-item'><FontAwesomeIcon icon={faUserPlus} /></p>
            </div>
            <div>
                <p>Name: {name}</p>
                <p>Address : {address} </p>
                <p>Email: {email} </p>
                <p>Phone: {phone} </p>
                <p>Salary : {salary} </p>
                <div className='button-div'>
                <button onClick = {()=> props.handleAddClick(user)} className='button'><FontAwesomeIcon icon={faUserPlus} /></button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Friend;