import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// pushes page to "/login" route when user is not authenticated
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
