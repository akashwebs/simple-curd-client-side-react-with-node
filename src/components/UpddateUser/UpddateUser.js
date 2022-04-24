import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpddateUser = () => {
    const [user, setUser]=useState({})
    const {id}=useParams();
    
    const url=`http://localhost:5000/mainuser/${id}`;
    useEffect(()=>{

        fetch(url)
        .then(res=>res.json())
        .then(data=> setUser(data))
    },[]);

    const handleUpdate=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const updateUser={name, email};

        const url=`http://localhost:5000/mainuser/${id}`;
        
        fetch(url,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    
    return (
        <div>
            <h2>update user: {user.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' placeholder='your name' />
                <br></br>
                <input type="email" name="email" id="" placeholder='your email' />
                <br></br>
                <input type="submit" value="update user" />
            </form>
        </div>
    );
};

export default UpddateUser;