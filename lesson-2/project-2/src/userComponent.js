import React from 'react';

function UserComponent(props) {
    let {item: {id, name, email}} = props
    return (
        <div>

            <h2>{name} {id}</h2>
            <p>{email}</p>
            <button>Go Info</button>

        </div>
    );
}

export default UserComponent;