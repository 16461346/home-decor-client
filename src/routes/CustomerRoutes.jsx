import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const CustomerRoutes = ({children}) => {
    const{loading}=useAuth()
    const [role,isRoleLoading]=useRole()

    if(loading || isRoleLoading) return <LoadingSpinner/>

    if(role !=='customer'){
        return <ErrorPage/>
    }
    return children;
};

export default CustomerRoutes;