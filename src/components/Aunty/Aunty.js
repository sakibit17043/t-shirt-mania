import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [ornament,house] = useContext(RingContext)
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>Ring:{ornament}</small></p>
            <button onClick={()=>house(ornament+1)}>Aunty magic</button>
        </div>
    );
};

export default Aunty;