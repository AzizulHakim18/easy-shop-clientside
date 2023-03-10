import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import LoadingSpiner from '../Sheared/LoadingSpiner';


const PrivateRoutes = ({ children }) => {



    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(loading)
    if (loading) {
        return <LoadingSpiner></LoadingSpiner>
    }

    if (user && user.uid) {
        return children
    }

    return (
        <div>
            <Navigate to='/login' state={{ from: location }} replace />
        </div>
    );
};

export default PrivateRoutes;