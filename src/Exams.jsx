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
                    className="border-2 h-9 w-80"
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)} autoFocus/>
                    <button type="submit" className="h-10 w-20 bg-green-300 flex mt-5 hover-blue-300 text-2xl">Ok</button>
                    <p className="text-6xl">my name is: {display}</p>
                </form>
            </div>
        </>
    );
}

export default Exams;