import React, { useState } from "react";

function AboutUs(){
    const [count,setCount]=useState(0)
    return(
        <>
            <div>
                <p>Likes: {count}</p>
                <button onClick={(()=> setCount(count+1))}>Like</button>
            </div>
        </>
    );
}

export default AboutUs;