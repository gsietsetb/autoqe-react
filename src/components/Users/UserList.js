import React from 'react';
import PropTypes from "prop-types"

import UserListRow from './UserListRow';

const UserList = ({users}) => {
    return (
        <div>
            <h3>Users</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>This goes here...</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user =>
                    <UserListRow key={user.id} user={user} />
                )}
                </tbody>
            </table>
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;