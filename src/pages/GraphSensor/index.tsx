import React, {useState,useEffect} from 'react';
import Chart from "react-google-charts";
import {Link, useParams} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

interface DataSensor{ 
    value:number,
    dateTime:string
}

const GraphSensor = () =>{
    const [dataSensor,setDataSensor]= useState<[Date,number][]>([[new Date(),0]]);
    const { id } = useParams();

    useEffect(()=>{
    
        api.get<DataSensor[]>(`/sensors/${id}/dataSensors`).then(response =>{
            setDataSensor(response.data.map(data =>{
                return [new Date(data.dateTime),data.value]
            }))

        })

    },[id])

    return(
        <div className="container-graph-sensor">
            <header>
                <h1>Sou GraphSensor </h1>
            </header>
            <div className="border-graph">
                <div className="graph"> 
                <div className="button-back"> 
                    <Link to="/">
                        <FiArrowLeft color="blue" size={32}/>
                    </Link>
                </div>
                    <Chart
                        width={'100%'}
                        height={800}
                        chartType="Line"
                        loader={<div>Loading Chart</div>}
                        data={[
                            [
                            { type: 'date', label: 'Data' },
                            'Temperatura',
                            ],...dataSensor,
                        ]}
                        options={{
                            chart: {
                                title:'Temperatura medida pelo sensor',
                                
                            },                        
                            series: {
                                // Gives each series an axis name that matches the Y-axis below.
                                0: {
                                    axis: 'Temps',
                                    color: 'black', 
                                    visibleInLegend: true
                                },
                              },
                              axes: {
                                // Adds labels to each axis; they don't have to match the axis names.
                                y: {
                                  Temps: {
                                      label: 'Temperatura (Graus)',
                                    },
                                }
                              }
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>           
            </div>           
        </div>
    );
}

export default GraphSensor;