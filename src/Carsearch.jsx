import React from 'react'
import { Table } from 'react-bootstrap';
import { useState } from 'react';
const CarSearch = () => {
        let Map = [
          {
            id: 1,
            make: "Mitsubishi",
            model: "Lancer",
            type: "Used",
          },
          {
            id: 2,
            make: "Honda",
            model: "vezel",
            type: "new",
          },
          {
            id: 3,
            make: "Honda",
            model: "Civic",
            type: "Used",
          },
          {
            id: 4,
            make: "Audi",
            model: "A3",
            type: "new",
          },
          {
            id: 5,
            make: "Audi",
            model: "A4",
            type: "used",
          },
          {
            id: 6,
            make: "Audi",
            model: "A7",
            type: "new",
          },
          {
            id: 7,
            make: "BMW",
            model: "i8",
            type: "used",
          },
        ];
      
        const PRICELIST = [
          { id: 1, price: 1000 },
          { id: 2, price: 2000 },
          { id: 3, price: 3000 },
          { id: 4, price: 4000 },
          { id: 5, price: 5000 },
          { id: 6, price: 6000 },
          { id: 7, price: 7000 },
        ];
        const [search, setSearch] = useState("");
        const handleChange = (e) => {
          setSearch(e.target.value);
        };

        const filtered = Map.filter((value) => {
            const terms = search.toLowerCase().split(" ");
            return terms.every((term) =>
              `${value.make} ${value.model}`.toLowerCase().includes(term)
            );
          });
       
  return (
    <>
    <div><h1>Carsearch</h1></div>
    <div style={{ marginTop: "30px", marginLeft: "100px", width: "1000px" }}>
        <div>
          <form class="form-wrapper cf">
            <input
              type="text"
              placeholder="Searchhere..."
              value={search}
              onChange={handleChange}
              required
            />
            <button type="submit">Search</button>
          </form>
        </div>
     
    <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Make</th>
              <th>Model</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((value) => {
              let temp = PRICELIST.find((element) => element.id === value.id);
              if (temp.PRICELIST) {
                value.PRICELIST = temp.PRICELIST;
              }

              return (
                 

                <tr>
                  <td>{value.id}</td>
                  <td>{value.make}</td>
                  <td>{value.model}</td>
                  <td>{value.type}</td>
                  <td>{temp.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
   </div>
    </>

  )
}

export default CarSearch