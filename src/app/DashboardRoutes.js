import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../pages/LoggedIn/components/ProtectedRoute';
import Admin from '../layouts/Admin';
import AddVehicle from '../pages/VehiclesPage/AddVehicle/AddVehicle';
import Vehicle from '../pages/VehiclesPage/Vehicle/Vehicle';
import EditVehicle from '../pages/VehiclesPage/EditVehicle/EditVehicle';
import "../assets/jss/material-dashboard-react";
import { VehicleProvider } from './context/VehicleContext';
const DashboardRoutes = () => {
    return (
        <VehicleProvider>
        <div className="Routes">
            <Switch>
                <ProtectedRoute exact path="/user/dashboard" component={Admin} />
                <ProtectedRoute exact path="/user/userprofile" component={Admin} />
                <ProtectedRoute exact path="/user/repairs" component={Admin} />
                <ProtectedRoute exact path="/user/notifications" component={Admin} />
                <ProtectedRoute exact path="/user/vehicles/add" component={AddVehicle}/>
                <Route exact path="/vehicles/:id" component={Vehicle} />
                <ProtectedRoute exact path="/vehicles/:id/edit" component={EditVehicle} />
            </Switch>
        </div>
        </VehicleProvider>
    )
}

export default DashboardRoutes;