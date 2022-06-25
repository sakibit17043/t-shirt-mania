import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';


const Father = ({house,ornament}) => {
    return (
        <div>
            <h4>Father</h4>
            <p>house:{house}</p>
            <div style={{display:'flex'}}>
            <Myself 
            house={house}
            ornament = {ornament}
            ></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>

            </div>
         
        </div>
    );
};

export default Father;