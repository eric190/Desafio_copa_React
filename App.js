import React,{useState,useEffect} from 'react';

import api from './Api.js';

import axios from 'axios';



const [times, setTimes] = useState([]);





import { BarChart, Bar, XAxis, YAxis, 


    CartesianGrid } from 'recharts';

  useEffect(() => {
    api.get('/times').then(response => setTimes(response.data))

  },[])
const App = () => {
  
  import React, { PureComponent } from 'react';
  import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
  
  const data = [
    {
      name: 'Brasil',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Alemanha',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Dinamarca',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Australia',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      
    
  
  export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }
  
     
export default App;
