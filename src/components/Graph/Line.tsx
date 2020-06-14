import React, { Component } from 'react';
import Chart from 'react-apexcharts'

interface propsGraph {
    
    series?:number[]
    
}

class Line extends Component<propsGraph> {

  constructor(props:propsGraph|any) {
    super(props);

    console.log(props.value)
  }

  render() {

    return (
      <div className="line">
        <Chart options={{
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      }} series={[{
        data: [30, 40, 25, 50, 49, 21, 70, 51]
      }]} type="line" width="500" />
      </div>
    );
  }
}

export default Line;