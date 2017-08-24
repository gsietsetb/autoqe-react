import React from 'react';
import PropTypes from "prop-types"

import UserListRow from './UserListRow';

const UserList = ({hobbies}) => {
    return (
        <div>
            <h3>Hobbies</h3>
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {hobbies.map(user =>
                    <UserListRow key={user.id} user={user} />
                )}
                </tbody>
            </table>
        </div>
    );
};

UserList.propTypes = {
    hobbies: PropTypes.array.isRequired
};

export default UserList;