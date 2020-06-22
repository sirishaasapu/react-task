import React from 'react';
import data from './data/carded.json'
// import Profilei from './images/woman.svg';
import {Link}  from 'react-router-dom';

function card(){    
   return(
       <div className="mt-5">
           <div className="row justify-content-center">
           {data.profiles.map((value,index)=>(
           <div className="col-3 card m-3" style={{boxShadow:'1px 1px 1px 1px'}}>
           <div className="card-body text-center">
           <img src={value.basics.images} alt="profilepic" style={{width:'70%'}}/>
             {/* <img src={require('./Images/sirisha.png')}/>  */}
            <h4 className="mt-2">{value.basics.name}</h4>
            <h5 style={{color:'grey'}}>{value.basics.Id}</h5>
            <h5>{value.basics.role}</h5>
            <hr/>
            <h5 style={{color:'purple'}}>{value.basics.Email}</h5>
            <h5 style={{color:'purple'}}>{value.basics.contact}</h5>
            <Link to={{pathname:'/resume',data:{id:index}}} type="button" style={{wordWrap:'break-word'}} className="btn btn-primary d-flex justify-content-center w-auto">view profile</Link>
           </div>
           </div>
           ))}
           </div>

       </div>
   )
}
 export default card;