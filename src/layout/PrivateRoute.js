
import * as React from 'react';
import MainLayout2 from './MainLayout2';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute() {
    const user = JSON.parse(localStorage.getItem('auth'))

    // if (!user) return <Navigate to='/login' />

    return <MainLayout2 />
};