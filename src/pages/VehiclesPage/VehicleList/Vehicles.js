import React from 'react';
import { useVehiclesContext } from '../../../app/context/VehicleContext';

const Vehicles = () => {
    const {vehicles} = useVehiclesContext()
    return (
        <div>
            {vehicles}
            <button><a href="/app/vehicles/:id">Show</a></button>
        </div>
        

    )
}

export default Vehicles;