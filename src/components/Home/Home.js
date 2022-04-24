import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/mainuser')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const handleDelete = id => {
        const procced = window.confirm('are u agree delete user');
        if (procced) {
            const url = `http://localhost:5000/user/${id}`;

            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }

    }
    return (
        <div>
            <h2>this is home</h2>
            <p>lenth: {users.length}</p>
            {
                users.map(user => {
                    return <p
                        key={user._id}
                    >name: {user.name} :: email: {user.email}
                        <Link to={`/update/${user._id}`}>
                            <button>update</button>
                        </Link>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </p>
                })
            }
        </div>
    );
};

export default Home;