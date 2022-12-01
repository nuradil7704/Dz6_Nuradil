import React from 'react';

function UsersList({userList}) {
    const getUserInfo = (event) => {
        const id = event.target.dataset.id
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => response.json())
                .then(data => console.log(data))
    }
    return (
        <ul>
            {
                userList.map(user =>
                <li key={user.id}>
                    <p>name: {user.name}</p>
                    <p>email: {user.email}</p>
                    <p>website: {user.website}</p>
                    <button data-id={user.id} onClick={getUserInfo}>get info</button>
                    <p>-------------------------------</p>
                </li>
                )
            }
        </ul>
    );
}

export default UsersList;