import React from 'react';
import data from './data/carded.json'
import {Link}  from 'react-router-dom';

let Resume=(prop)=>{
    let info=data.profiles[prop.location.data.id];
    return(
        <div>
    
        <div  style={{color:'white',background:'#042e15',padding:'15px'}}>
             <h2 className="container">My first React Application</h2>
              </div>
             <div className="container mt-5">
          
           
           <div className="row justify-content-center">
                <div className="col-3 card mr-3" style={{boxShadow:'1px 1px 1px 1px',height:'20%'}}>
                     <div className="card-body text-center h-100" >
                         <img src={info.basics.images} alt="profilepic" style={{width:'70%'}}/> 
                         <h4 className="mt-2">{info.basics.name}</h4>
                       <h5 style={{color:'grey'}}>{info.basics.Id}</h5>
                      <h5>{info.basics.role}</h5>
                         <hr/>
                     <h5 style={{color:'purple'}}>{info.basics.Email}</h5>
                    <h5 style={{color:'purple'}}>{info.basics.contact}</h5>
                    <Link to={{pathname:'/'}} type="button" className="btn btn-primary mt-3 w-auto">Back</Link>
                         </div>
                </div>
                <div className="col-8 card" style={{boxShadow:'1px 1px 1px 1px'}}>
                    <div className="card-body">
                    <img src={info.basics.images} alt="profilepic" style={{width:'17%',float:'right'}}/>
                           <h4 className="text-info">{info.basics.name}</h4>
                           <h5>{info.basics.city}</h5>
                           <h5>{info.basics.Email}</h5>
                           <h5>{info.basics.contact}</h5>
                           <hr/>
                           <h5>CAREER OBJECTIVE</h5>
                           <p>
                           Seeking a productive position to utilize my skills and upgrade them through continuous learning in a challenging environment that helps me to contribute efficiently for the growth of the organization while being resourceful and innovative
                           </p>
                        <hr/>		
                        <h5>ACADEMICS</h5>
                        <div className="table-responsive">
                        <table className="table border-none w-auto">
                            <thead>
                                <tr>
                                <th>Qualification</th>
                                <th>Course </th>
                                <th>Grades</th>
                                <th>Year</th>
                                </tr>
                                </thead>
                                <tbody>
                               <tr>
                                   <td>{info.basics.degree}</td>
                                   <td>{info.basics.Course}</td>
                                   <td>{info.basics.dresult}</td>
                                   <td>{info.basics.year1}</td>
                                   </tr>
                                   <tr>
                                   <td>{info.basics.inter}</td>
                                   <td>{info.basics.icourse}</td>
                                   <td>{info.basics.iresult}</td>
                                   <td>{info.basics.year2}</td>
                                   </tr>
                                   <tr>
                                   <td>{info.basics.X}</td>
                                   <td>{info.basics.xcourse}</td>
                                   <td>{info.basics.xresult}</td>
                                   <td>{info.basics.year3}</td>

                                   </tr>
                                    {/* <tr>
                                        <td>B.tech</td>
                                        <td>CSE</td>
                                        <td>8.0</td>
                                        <td>2020</td>
                                    </tr>
                                
                                    <tr>
                                        <td>Inter</td>
                                        <td>Mpc</td>
                                        <td>93.9</td>
                                        <td>2016</td>
                                    </tr>
                                
                                    <tr>
                                        <td>X class</td>
                                        <td>SSC</td>
                                        <td>9.2</td>
                                        <td>2014</td>
                                    </tr>
                                 */}
                                    </tbody>
                        </table>
                        </div>
                        <hr/>
                        <h5>TECHNICAL SKILLS</h5>
                        <ul>
                            <li>
                                <b>web technologies:</b>
                                {info.basics.web} 
     
                            </li>
                            <li>
                                <b>Programming languages :</b>
                                {info.basics.lang} 
                            </li>
                        </ul>
                        <hr/>
                        <h5>Hobbies</h5>
                        <ul>
                        {info.basics.hobbies.map((HValue,Index)=>(

                            <li>{HValue}</li>
                            ))
                        }
                        </ul>
    
                        </div>
    
                </div>
           </div>
           </div>
            </div>
       )
    }
    
        // <div className="row justify-content-center">
        //     {/*Left part*/}
        //     <div className="col-lg-3 m-2">
        //         <div className="card shadow">
        //             <div className="card-body p-2">
        //                 <h2>{info.basics.name}</h2>
        //             </div>
        //         </div>
        //     </div>
        //     {/*right part*/}
        //     <div className="col-lg-8 m-2">
        //         <div className="card shadow">
        //             <div className="card-body p-2">
        //             row 1 col 2
        //             </div>
        //         </div>
        //     </div>
        // </div>


// function Resume(){
//    return (
   
export default Resume; 