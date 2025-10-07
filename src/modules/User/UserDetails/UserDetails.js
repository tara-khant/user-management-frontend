import React, { startTransition } from 'react';
import UserDetailsView from './UserDetailsView';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    startTransition(() => navigate('/users'));
  };

  return <UserDetailsView onBackClick={handleBackClick} />;
};

export default UserDetails;
