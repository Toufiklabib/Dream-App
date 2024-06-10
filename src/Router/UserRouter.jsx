
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const UserRouter = ({children}) => {

    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if (loading)
        {
            return <><span className="loading loading-spinner loading-lg"></span></>
        }
          if(user)
          {
            return children;
          }
           
          return <Navigate to="/login" state={{ from: location }} replace />;
    
};

export default UserRouter;