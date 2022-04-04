import React, { useContext } from "react";
import { CounterContextProvider, CounterContext } from './contexts/CounterContext';
import Counter from './components/Counter/counter'

export default function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <Counter />
      </div>
    </CounterContextProvider>
  );
}