import React, { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

export default function Counter(){

    const {counter, increaseCounter} = useContext(CounterContext);

    return(
        <>
            <h1>Counter: { counter }</h1>
            <button onClick={increaseCounter}>Aumentar</button>
        </>
    )
}