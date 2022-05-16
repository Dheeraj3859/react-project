import { Tab } from "bootstrap";
import React from "react";

//now creating simple components using functions
const TableHeader = ()=>{
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
        </tr>
      </thead>
    );
}

const TableBody = (props)=>{
    const rows = props.characterData.map((row,index)=>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button oncClick={()=>props.removeChar(index)}>Delete</button></td>
            </tr>
        )
    })
}

const Table1 = (props)=>{
    const {characterData,removeChar} = props;
    return(
        <table>
            <TableHeader/>
            <TableBody characterData={characterData} removeChar={removeChar}/>
        </table>
    )
}

export default Table1