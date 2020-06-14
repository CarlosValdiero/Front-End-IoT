import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FiArrowRight} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

interface Sensor{
    id:number,
    type:string,
    unitMeasurement:string
}


const ListSensors = () =>{
    const [sensors, setSensors] = useState<Sensor[]>([]);

    useEffect(()=>{
        api.get("/sensors").then(response =>{
            setSensors(response.data);
        })
    },[]);

    return(
        <div className="container-list-sensors">
            <header>
                <h1>Sou ListSensors</h1>
            </header>
            <div className="list-sensors"> 
                <ul>
                    {sensors.map(sensor => (
                        <li key={sensor.id}>                        
                            <div className="sensor-item">
                                <h3>Sensor {sensor.id}</h3>
                                <p>Tipo: {sensor.type}</p>
                                <p>Unidade de medida: {sensor.unitMeasurement}</p>
                            </div>      
                            <Link to={`/sensor/${sensor.id}`}>
                                <FiArrowRight color="blue" size={32}/>
                            </Link>               
                        </li>
                    ))}
                    
                </ul>

            </div>
            
        </div>
    );
}

export default ListSensors;