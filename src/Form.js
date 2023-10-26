import React from "react";
import FormData from "./data.json"

export default function Form(){
    /*const [name, setName]=React.useState("")
    const [employeeNo, setEmployeeNo]=React.useState("")
    const [designation, setDesignation]=React.useState("")
    
    
    function handleChange(){
        setName(this.value)
        setEmployeeNo(this.value)
        setDesignation(this.value)
    }*/

    return (
        <div>
            {Object.keys(FormData).map((data, idx)=>{
            return(
            <div key={idx}>
            <label className="labels">{data}</label>{data==="Designation" ? 
            <select name={FormData[data].name} id={FormData[data].id}  >
                {FormData[data].option.map((options, idx)=>(
                <option key={idx} value={options}>{options}</option>
                ))}
            </select>
            : 
            <input 
            type={FormData[data].type} 
            name={FormData[data].name} 
            placeholder={FormData[data].placeholder} 
            id={FormData[data].id}
            //onChange={handleChange}
            //value={FormData[data].value}

            />}
            </div>
            )})}
            </div>
    )
}