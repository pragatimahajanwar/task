import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
// let url = 'https://dummyjson.com/products'
function Productapi() {
    let url = 'https://dummyjson.com/products'
    let [data, setData] = useState([])
    function newData() {
        console.log("product details")
        fetch(url)
            .then(function (response) {
                //console.log()
                return response.json()
            })
            .then(function (fetData) {
                setData(fetData.products)
                console.log(fetData.products)

            })
    }
    useEffect(() => {
        newData()
    })
    console.log('outside', data);

    return (
        <>
            <button onClick={newData}>start</button>
            <Table striped bordered hover variant="dark"
            >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>brand</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>discountPercentage</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.brand}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.category}</td>
                                <td>{item.discountPercentage}</td>
                                {/* <td>
                                    <img src={item.images[0]} style={{ width: "40px", height: "50px" }} />
                                    <img src={item.images[1]} style={{ width: "40px", height: "50px" }} />
                                    <img src={item.images[2]} style={{ width: "40px", height: "50px" }} />
                                    <img src={item.images[3]} style={{ width: "40px", height: "50px" }} />
                                    <img src={item.images[4]} style={{ width: "40px", height: "50px" }} />
                                </td> */}
                            </tr>

                        ))}


                </tbody>
            </Table>


        </>
    )
}
export default Productapi