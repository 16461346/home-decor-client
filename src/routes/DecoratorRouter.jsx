import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const DecoratorRouter = ({children}) => {
 const{loading}=useAuth()
    const [role,isRoleLoading]=useRole()

    if(loading || isRoleLoading) return <LoadingSpinner/>

    if(role !=='decorator'){
        return <ErrorPage/>
    }
    return children;
};

export default DecoratorRouter;