import React, { useState } from "react";

function AboutUs(){
    const [count,setCount]=useState(0)
    return(
        <>
            <div>
                <h1 className="text-6xl">Likes: {count}</h1>
                <button onClick={(()=> setCount(count+1))} className="h-10 w-20 bg-green-300 flex mt-5 hover-blue-300 text-2xl">Like</button>
            </div>
        </>
    );
}

export default AboutUs;