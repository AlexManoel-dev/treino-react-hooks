import React, { useState, createContext } from 'react';

export const CounterContext = createContext();

export function CounterContextProvider({ children }){

    const [counter, setCounter] = useState(0);

    function increaseCounter(){
        setCounter(counter + 1);
    }

    return(
        <CounterContext.Provider value={{ counter, setCounter, increaseCounter }}>
            { children }
        </CounterContext.Provider>
    )
}