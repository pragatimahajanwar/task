
// import { Table } from "react-bootstrap";
 const Carlist=()=>{
  
   const array = [
   
    { id: 2, make: "Honda", model: "Vezel", condition: "New",price:2000 },
    { id: 3, make: "Honda", model: "Civic", condition: "Used",price:3000 },
   ]
  return(
    <>
    <div>
      <h2>Car list</h2>
      <ul>
        {array.map((item,index)=>(
        <li key={index}>
         {item.id}. {item.make} {item.model} -{item.condition} -${item.price}
        </li>
        ))}
      </ul>
    </div>
    
    
    </>
  )
 }
 export default Carlist