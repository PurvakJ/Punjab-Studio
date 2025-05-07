import React from 'react';

const TeamMember = ({ name, role, bio, image }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={image} alt={name} />
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;