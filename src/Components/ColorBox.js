import React from 'react';
import utils from '../Utils.js';
import {useState, useEffect} from 'react'
import './ColorBox.css';


function ColorBox () {
    const [color,setColor] = useState(utils.getRandomColor());
    const [clName, addNewClass] = useState("c-box c-box-square");

    let counter = 0;

    useEffect(() => {
        const myInterval = setInterval(()=>{
          const newColor = utils.getRandomColor();
          console.log("updating new color to: " + newColor);
          console.log(counter);
          setColor(newColor);
          counter++;

        if (counter == 5)
          addNewClass("c-box c-box-round"); 

        if (counter == 10)
            clearInterval(myInterval); 

        }, 500);     

        // clean up
        return () => {
            clearInterval(myInterval);
        }

    },[])

    // useEffect(()=>{}, [color]);

    const myStyle = {backgroundColor: color}

    return(

        <>
            <div style={myStyle} className={clName}>

            </div>
        </>
    )
}

export default ColorBox