import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

const NewChart = () => {

    const data = [
        {
          name: 'jan',
          activeuser: 4000,
          pv: 2400,
           },
        {
          name: 'feb',
          activeuser: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'mar',
          activeuser: 2000,
          pv: 9800,
          },
        {
          name: 'apr',
          activeuser: 2780,
          pv: 3908,
           },
        {
          name: 'may',
          activeuser: 1890,
          pv: 4800,
           },
        {
          name: 'jun',
          activeuser: 2390,
          pv: 3800,
           },
        {
          name: 'jul',
          activeuser: 5252,
          pv: 4300,
          
        },
        {
          name: 'aug',
          activeuser: 4225,
          pv:6525 ,
          
        },
        {
          name: 'sep',
          activeuser: 4532,
          pv: 6800,
          
        },
        {
          name: 'oct',
          activeuser: 3245,
          pv: 3256,
          
        },
        {
          name: 'nov',
          activeuser: 9867 ,
          pv: 1566,
          
        },
        {
          name: 'dec',
          activeuser: 5245,
          pv: 1235,
          
        },
      ];
      return( 

          
          <div className='chart'>
       <h3 className='charttitle'>User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
      <LineChart data={data}>
<XAxis dataKey='name'/>
<YAxis dataKey="pv"/>
<Line dataKey="activeuser"/>
<Tooltip/>
< CartesianGrid/>
      </LineChart>
      </ResponsiveContainer>
      
    </div>
  
)
}

export default NewChart
