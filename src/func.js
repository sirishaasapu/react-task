import React, { useState } from 'react';
import Data from './data/data.json'

function Func(p){
    //Hook used to store data in functional component
    //Hook:useState -assign value to function component
    const [courses]=useState(['b.tech','M.tech','D.Ed','B.ed']);

    const [branch,setData]=useState({
                             "branch1":'cse',
                              "branch2":'ece',
                              "branch3":'eee',
                              "branch4":'civil',
                              "branch5":'mech'});
          //manipulating data using Hook                    
        let changebranch=()=>
             setData({
            "branch1":'HTML5',
            "branch2":'CSS3',
            "branch3":'bootstrap',
            "branch4":'Angular',
            "branch5":'React'});
   
    return (
        <div className='container mt-5'>
           <h4>This is external functional component</h4>
           <h5>Courses</h5>
           <ul>
           <li>{courses[0]}</li>
            <li>{courses[1]}</li>
           <li>{courses[2]}</li> 
           </ul>
            <h5>Courses</h5>
            <ul>
           <li>{branch.branch1}</li>
           <li>{branch.branch2}</li>
           <li>{branch.branch3}</li>
           <li>{branch.branch4}</li>
           <li>{branch.branch5}</li>
           </ul>
           {/* //calling */}
           <button className="btn btn-primary mb-5" onClick={changebranch}>Change</button>
             {/* (or)*/}
           {/* <button className="btn btn-primary mb-5" onClick={()=>{
            setData({
           "branch1":'HTML5',
            "branch2":'CSS3',
            "branch3":'bootstrap',
            "branch4":'Angular',
            "branch5":'React'}); }}>Change</button> */}
            <div>
                <h3>{p.name}</h3>
            </div>
            <div>

         
                <table className='table table-stripted table-hover table-info'>
                   <thead>
                       <tr>
                           <th>S.No</th>
                           <th>ID</th>
                           <th>name</th>
                           <th>Email</th>
                           <th>Branch</th>
                       </tr>
                       </thead> 
                       {Data.card.map((value,index)=>(
                       <tbody>
                           <tr>
                               <td>{index}</td>
                               <td>{value.cardId}</td>
                               <td>{value.cardname}</td>
                               <td>{value.email}</td>
                               <td>{value.branch}</td>
                           </tr>
                           {/* <tr>
                               <td>{Data.card[1].cardId}</td>
                               <td>{Data.card[1].cardname}</td>
                               <td>{Data.card[1].email}</td>
                               <td>{Data.card[1].branch}</td>
                           </tr>
                           <tr>
                               <td>{Data.card[2].cardId}</td>
                               <td>{Data.card[2].cardname}</td>
                               <td>{Data.card[2].email}</td>
                               <td>{Data.card[2].branch}</td>
                           </tr> */}

                       </tbody>   ))}
                   
                </table>
             
            </div>
        </div>
    );
}

export default Func;