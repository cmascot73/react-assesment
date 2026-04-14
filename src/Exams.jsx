import React, { useState } from "react";

function Exams(){
    const [name,setName]=useState('')
    const [display,setDisplay]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        setDisplay(name)
    }
    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)} autoFocus/>
                    <button type="submit">Ok</button>
                    <p>my name is: {display}</p>
                </form>
            </div>
        </>
    );
}

export default Exams;