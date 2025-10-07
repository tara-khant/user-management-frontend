import React from 'react';

export default {
  Listing: React.lazy(() => import('./UserListing')),
  Create: React.lazy(() => import('./CreateUser')),
  Details: React.lazy(() => import('./UserDetails')),
  EditUser: React.lazy(() => import('./EditUser')),
};
