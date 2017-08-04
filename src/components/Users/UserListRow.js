import React, {PropTypes} from 'react';

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