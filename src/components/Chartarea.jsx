import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS,CategoryScale,Title,Tooltip,Legend,LinearScale,LineElement,PointElement} from 'chart.js'


ChartJS.register(
  CategoryScale,Title,Tooltip,Legend,LinearScale,LineElement,PointElement
)



const Chartarea = ({arr,currency}) => {

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1 and pad with '0' if needed.
  const day = currentDate.getDate().toString().padStart(2, '0'); // Pad day with '0' if needed.
  
  const formattedDate = `${year}/${month}/${day}`;
  
const months =[formattedDate,formattedDate];
const prices =[arr.market_data?.low_24h[currency],arr.market_data?.high_24h[currency]];

  return (
 <Line 
 options={{responsive:true}}
 data={{
  labels:months,
  datasets:[
    {
      label:`prices in ${currency}`,
       data:prices,borderColor:"rgb(255,99,132)",
       backgroundColor:"rgba(255,99,132,0.5)"
  }
  ]
 }}
 />
  )
}

export default Chartarea
