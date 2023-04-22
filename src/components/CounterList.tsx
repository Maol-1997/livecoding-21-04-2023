import Counter from './Counter.tsx'
import {createContext, useContext} from "react";
import {CounterValues} from "../App.tsx";

export const CounterContext = createContext(
    {
        ListOnIncrement: (id: number, value: number) => {},
        ListOnDecrement: (id: number, value: number) => {}
    })

export default function CounterList({counters}: { counters: { id: number, value: number }[] }) {
    const onIncrement = (id: number, value: number) => {
        console.log('onIncrement id:' + id + ' value:' + value)
    }
    const onDecrement = (id: number, value: number) => {
        console.log('onDecrement id:' + id + ' value:' + value)
    }
    const containerContext = useContext(CounterValues)

    return (
        <section>
            <h2>CounterList</h2>
            <h2>Total Values: {containerContext.totalValues}</h2>
            <CounterContext.Provider value={{ListOnIncrement: onIncrement, ListOnDecrement: onDecrement}}>
                {counters.map(counter => (
                    <Counter key={counter.id} id={counter.id} initialValue={counter.value}/>
                ))}
            </CounterContext.Provider>
        </section>
    )
}
