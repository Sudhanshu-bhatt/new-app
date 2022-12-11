import React from 'react'
import { Chart } from "react-google-charts";



export const data = [
    ["Month", " Sale"],
    ["January",  212652 
],
    ["Febraury",  207447 
],
    ["March",  209679 
],
    ["April",  80151 
],
    ["May",  201163 
],
    ["June",  103782 
],
    ["July",  187072 
],
    ["August",23547  ], 

    
  ];
  
  export const options = {
    title: "Bonus_2022_Final (Sales)",
    is3D: true,
    
  };

const Dashboard = () => {
  return (
    <>
    <div className='Dash'><Chart className='chart'
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"50rem"}
    /></div> </>
  )
}

export default Dashboard