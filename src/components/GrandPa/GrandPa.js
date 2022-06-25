import { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';
export const RingContext = createContext('ring');

const GrandPa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';
    const handleBuyAHouse = () => {
        setHouse(house + 1);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>

            <div className='grandpa' >
                <h4>Grand Pa</h4>
                <button
                    onClick={handleBuyAHouse}
                >Buy A House</button>
                <p>House:{house}</p>
                <section style={{ display: 'flex' }}>
                    <Father
                        house={house}
                        ornament={ornament}
                    ></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>

            </div>
        </RingContext.Provider>

    );
};

export default GrandPa;