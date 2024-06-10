import React, { useContext } from 'react';
import useAdmin from '../hooks/useAdmin';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const AdminRoute = ({children}) => {
    const {user ,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading)
        {
            return <><span className="loading loading-spinner loading-lg"></span></>
        }
          if(user && isAdmin )
          {
            return children;
          }
           
          return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;