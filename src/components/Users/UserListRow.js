import React from 'react';
import PropTypes from "prop-types"

const UserListRow = ({user}) => {
    return (
        <tr>
            <td>{user.name}</td>
        </tr>
    );
};

UserListRow.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserListRow;