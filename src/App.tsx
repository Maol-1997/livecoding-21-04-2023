import './App.css'
import CounterList from "./components/CounterList";
import {createContext, useRef, useState} from "react";

const defaultValues = {
    values: [{id: -1, value: 0}],
    totalValues: 0,
    setTotalValues: (newValue: number) => {}
}
export const CounterValues = createContext(defaultValues)

function App() {
    const [totalValues, setTotalValues] = useState(0)
    const values = useRef([])
    const counters = [
        {id: 0, value: 0},
        {id: 1, value: 24},
        {id: 2, value: 12}
    ]

    return (
        <>
            <h1>Livecoding</h1>
            <CounterValues.Provider value={{
                values: values.current,
                totalValues,
                setTotalValues,
            }}>
                <CounterList counters={counters}/>
            </CounterValues.Provider>
        </>
    )
}

export default App
