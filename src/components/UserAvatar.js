import React from 'react';

const UserAvatar = ({ initials, onClick }) => {
  return (
    <div className="user-avatar" onClick={onClick}>
      <span>{initials}</span>
    </div>
  );
};

export default UserAvatar;