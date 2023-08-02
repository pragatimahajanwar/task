

import React, { useEffect, useState } from 'react'
import  {Table} from 'react-bootstrap'

let url = 'http://43.205.119.97:8000/carlist'
function Carapi() {
    let [data, setData] = useState([])
    function carlist() {
        console.log('car list')
        fetch(url)
            .then(function (res) {
                console.log()
                return (res.json())
            })
            .then(function (fdata) {
                console.log(fdata)
                setData(fdata)
            })
            
    }

useEffect(() => {
    carlist();
}, [])
console.log('outside', data)
return (
    <>
      <button onClick={carlist}>Car details</button>
      <Table>
      <thead>
        <tr>
          <th>Sno.</th>a
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




export default Carapi