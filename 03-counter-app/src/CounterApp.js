import React,  {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 0}) => {
    
    const [counter, setCounter] = useState(0); // []

    // handledAdd
    const handleAdd = () => {
        // setCounter(counter + 1)
        setCounter( (value) =>  value +1 )
    };
    const handleRemove = () =>   setCounter( (value) =>  value - 1 );
    
    const handleReset = () => setCounter( (currentValue) =>  currentValue = value );

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleRemove}>-1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>+1</button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;