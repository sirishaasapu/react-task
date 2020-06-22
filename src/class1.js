import React from 'react';

class class1 extends React.Component{
    constructor(){
        super();
        //state is used only in class componemt
        //state is used to store data
        this.state=[{
            "name":'sirisha',
            'id':'166p1A0501',
            'branch':'CSE',
            'Course':'B.tech'
        },{
        "name":'shivangi',
        'id':'166p1A0502',
        'branch':'CSE',
        'Course':'B.tech'
        },
        {
            "name":'Krystel',
            'id':'166p1A0503',
            'branch':'CSE',
            'Course':'B.tech'
            },
            {
                "name":'Ishitha',
                'id':'166p1A0505',
                'branch':'CSE',
                'Course':'B.tech'
            }
    ]}
    //setState to change data#manipulate data
    add=()=>{
        this.setState([{
                "name":'Mohena',
                'id':'166p1A0506',
                'branch':'cse',
                'Course':'B.tech'
           },
           {
            "name":'Ruhi',
            'id':'166p1A0507',
            'branch':'Cse',
            'Course':'B.tech'
      },
       {
        "name":'Diksha',
        'id':'166p1A0508',
        'branch':'Cse',
        'Course':'B.tech'
       },
       {
        "name":'Rishi',
        'id':'166p1A0509',
        'branch':'Cse',
        'Course':'B.tech'
       }
       ] 
      )} 
      added=()=>{
        this.setState([{
                "name":'purna',
                'id':'166p1A0510',
                'branch':'cse',
                'Course':'B.tech'
           },
           {
            "name":'durga',
            'id':'166p1A0511',
            'branch':'Cse',
            'Course':'B.tech'
      },
       {
        "name":'vikas',
        'id':'166p1A0512',
        'branch':'Cse',
        'Course':'B.tech'
       },
       {
        "name":'nishan',
        'id':'166p1A0513',
        'branch':'Cse',
        'Course':'B.tech'
       }
       ] 
      )} 
    render(){
        return (
            <div className="container">
                <h3>I am a Class component</h3>
                <table className='table border'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>branch</th>
                            <th>Course</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>{this.state[0].name}</td>
                            <td>{this.state[0].id}</td>
                            <td>{this.state[0].branch}</td>
                            <td>{this.state[0].Course}</td>
                        </tr>
                        <tr>
                            <td>{this.state[1].name}</td>
                            <td>{this.state[1].id}</td>
                            <td>{this.state[1].branch}</td>
                            <td>{this.state[1].Course}</td>
                        </tr>
                        <tr>
                            <td>{this.state[2].name}</td>
                            <td>{this.state[2].id}</td>
                            <td>{this.state[2].branch}</td>
                            <td>{this.state[2].Course}</td>
                        </tr>
                        <tr>
                            <td>{this.state[3].name}</td>
                            <td>{this.state[3].id}</td>
                            <td>{this.state[3].branch}</td>
                            <td>{this.state[3].Course}</td>
                        </tr>
                    </tbody>
                </table>
                <h6 style={{color:'red'}}>{this.props.name}</h6>
                <button className='btn btn-primary float-right' onClick={this.added} onDoubleClick={this.add}>More</button>
          </div>

        )
    }
}

export default class1;