import React from 'react'
import { useState,useEffect } from 'react';
function Clock(){
    var [date, setDate] = useState(new Date());
    useEffect(() => {
        var timer =setInterval(() => setDate(new Date()), 1000)

        return function cleanup(){
            clearInterval(timer)
        }
    }
    )

 return (
   <> 
      <h1>Time: { date. toLocaleTimeString()}</h1>
     <p> Date: { date. toLocaleDateString()}</p>
   </>
 )

 }

export default Clock