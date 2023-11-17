import React from 'react'
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";


const ProtectedRoutes = ({ path, element }) => {
    const { auth } = useAuth();

    if (path === "/") {
        // If the path is the root path "/", don't apply protection logic
        return <Route path={path} element={element} />;
      }

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return <Route path={path} element={element} />;
};

export default ProtectedRoutes