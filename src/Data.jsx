import React from 'react'
import { Table } from 'react-bootstrap'
import { useState } from 'react';
const Data = () => {
    
    const Part=
         [

        {   id:1,
            Roll_No: 10001,
            Name: 'Vaishali',
            Class: '10th',
            Age: 16,
            Marks: "80/100"
        },
        
        { id:2,
            Roll_No: 10002,
            Name: 'minal',
            Class: '10th',
            Age: 16,
            Marks: "70/100"
        },
        {  id:3,
            Roll_No: 10003,
            Name: 'somya',
            Class: '10th',
            Age: 16,
            Marks: "80 / 100"
        },
        {    id:4,
            Roll_No: 10004,
            Name: 'kirti',
            Class: '10th',
            Age: 16,
            Marks: "85 / 100"
        },
        {id:5,
            Roll_No: 10005,
            Name: 'shri',
            Class: '10th',
            Age: 16,
            Marks: "87/ 100"

        },
        {id:6,Roll_No: 10006,Name: 'harshit',Class: '10th',Age: 16, Marks: "65 / 100"},
        {id:7,Roll_No: 10007,Name: 'amrita',Class: '10th',Age: 16, Marks: "75/ 100"} ,
        {id:8,Roll_No: 10008,Name: 'vasuki',Class: '10th',Age: 16, Marks: "88/ 100"},
         {id:9,Roll_No: 10009,Name: 'rudra',Class: '10th',Age: 16, Marks: "62/ 100"},
         {id:10,Roll_No: 10010,Name: 'kavya',Class: '10th',Age: 16, Marks: "90 / 100"}
    ]
    const [currentPage,setCurrentPage]=useState(1)
     const recordsPerPage =4;
     const lastIndex = currentPage *recordsPerPage;
    const firstIndex =lastIndex-recordsPerPage;
    const records= Part.slice (firstIndex,lastIndex)
     const nPage =Math.ceil(Data.length/recordsPerPage)
     const numbers=[...Array(nPage+1).keys()].slice(1)

    const [value, setValue] = useState();
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const onsSearch=(searchTerm)=>{
     setValue(searchTerm)
        console.log('search',searchTerm)
    }

//      const filtered = Part.filter((value) => {
//         const terms = value. toLowerCase().split(" ");
//          return terms.every((term) =>
//           `${value.Roll_No} ${value.Name}`.toLowerCase().includes(term)
//         );
//   });
    return (
        <>
            <div>Data</div>
            <div style={{ marginTop: "30px", marginLeft: "100px", width: "1000px" }}>
                <div>
                    <form class="form-wrapper cf">
                        <input
                            type="text"
                            placeholder="Searchhere..."
                            value={value}
                            onChange={handleChange}
                            
                        />
                        <button onClick={()=>onsSearch(value)}>Search</button>
                        <div className='dropdown'>
                            {
                            Part.filter((item)=>{
                                const searchTerm =value.toLowerCase();
                                const fullName =item.Name.toLowerCase();

                                return( 
                                    searchTerm && fullName.startsWith(searchTerm)&& fullName !== searchTerm
                                )
                            
                            })
                            .slice(0,10)
                            .map((item)=>(
                            <div 
                            onClick={()=>onsSearch(item)}
                            className='dropdown_row'
                            key={item.Name}>
                                {item.Name}
                                </div>
                            ))
                            }
                        </div>
                    </form>
                </div>
               
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr.no</th>
          <th>Roll No</th>
          <th>Name</th>
          <th>Class</th>
          <th>Age</th>
          <th>Marks</th>
        </tr>
      </thead>
      
      <tbody>
        
        {
            records.map((d,index)=>(
                <tr key={index}>
                <td>{d.id}</td>
                <td>{d.Roll_No}</td>
                <td>{d.Name}</td>
                <td>{d.Class}</td>
                <td>{d.Age}</td>
                <td>{d.Marks}</td>
              </tr>
            
            ))
        }
        
        </tbody>
      </Table>
            </div>
            <nav>
                <ul className='pagination'>
                    <li className='page-item'>
                        <a href='#' className='page-link' onClick={prePage}>prev
                            
                        </a>

                    </li>
                    {
                        numbers.map((n,i)=>(
                            <li className={`page-item ${currentPage===n?'active':'' }`} key={i}>
                                <a href='#' className='page-link'
                                onClick={ ()=>changeCpage(n)}>{n}</a>

                            </li>
                        )) }

                        <li className='page-item'>
                        <a href='#' className='page-link' onClick={nextPage}>next
                            
                        </a>

                    </li>
                </ul>
            </nav>
        </>

    
    )          
    function prePage(){
        if(currentPage!==1){
            setCurrentPage(currentPage -1)
        }
        
    }
     function changeCpage(id){
        setCurrentPage(id)

    }
     function nextPage(){
        if(currentPage!==lastIndex){
            setCurrentPage(currentPage+1)
        }

     }
    
}

export default Data