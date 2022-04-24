import React from 'react';

const AddUser = () => {

    const handleUser=(event)=>{
        
        event.preventDefault();
        const name= event.target.name.value;
        const email=event.target.email.value;

        const user={name, email};
        
        fetch('http://localhost:5000/mainuser')
        .then(res=>res.json())
        .then(data=>console.log(data))
        
        
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('user add successfully');
        })
        .catch(error=>{
            console.log(error);
        })

    }
    
    return (
        <div>
            <h2>this is add user page</h2>
            <form onSubmit={handleUser}>
                <input type="text" name='name' placeholder='your name' />
                <input type="email" name='email' placeholder='your email' />
                <input type="submit" value="add user" />
            </form>
        </div>
    );
};

export default AddUser;