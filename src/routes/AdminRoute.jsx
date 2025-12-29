import React from 'react';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import useRole from '../hooks/useRole';
import ErrorPage from '../pages/ErrorPage';

const AdminRoute = ({children}) => {
    const{loading}=useAuth()
    const [role,isRoleLoading]=useRole()

    if(loading || isRoleLoading) return <LoadingSpinner/>

    if(role !=='admin'){
        return <ErrorPage/>
    }
    return children;
};

export default AdminRoute;