import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap'
function Axiosget() {
let url='http://43.205.119.97:8000/carlist'
let [data,setData]=useState([])
async function getData(){
let res = await axios.get (url)
console.log(res)
setData (res.data)
}
useEffect(() => {
    getData();
}, [])
console.log('outside', data)
  return (
    <>
     <button onClick={getData}>Car details</button>
      <Table>
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Car</th>
          <th>Fuel</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {
        data.map((item, index) => (
          <tr>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.fuelType}</td>
          <td>{item.other.company}</td>
        </tr>
            
        ))}
      </tbody>
    </Table>
    
    </>
  )
}

export default Axiosget