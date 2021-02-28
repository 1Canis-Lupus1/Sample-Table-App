import React from 'react';

class Table extends React.Component{
    componentDidMount(){
        // console.log(this.props.data)
        // console.log(this.props.data.length)
        return(
            <React.Fragment>
                {this.props.data.map(e=>{
                    console.log("E is:",e)
                    return(
                        <tr>
                            <td>{e.no}</td>
                            <td>{e.first}</td>
                            <td>{e.last}</td>
                        </tr>
                    ) 
                })}
            </React.Fragment>
        )
    }
    render(){
        return(
            <React.Fragment>
                {/* Inline CSS for basic styles */}
                <table style={{margin:"auto",marginTop:"20px"}} border="1">
                    <tr>
                        <th style={{padding:"10px"}}>S No</th>
                        <th style={{padding:"10px"}}>First Name</th>
                        <th style={{padding:"10px"}}>Last Name</th>
                    </tr>
                    {this.componentDidMount()}
                </table>
            </React.Fragment>
        )
    }
}

export default Table;