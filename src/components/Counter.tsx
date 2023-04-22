import {useState, useContext, useEffect} from "react";
import {CounterContext} from "./CounterList";
import {CounterValues} from "../App";

export default function Counter({id, initialValue}: { id: number, initialValue: number }) {
    const [currentNumber, setCurrentNumber] = useState<number>(initialValue)
    const listContext = useContext(CounterContext)
    const containerContext = useContext(CounterValues)

    const stateChanger = (currentNumber: number) => {
        console.log(containerContext.values)
        const thisValue = containerContext.values.findIndex(value => value.id === id)
        if (thisValue !== -1) {
            containerContext.values[thisValue].value = currentNumber
        } else {
            containerContext.values.push({id: id, value: currentNumber})
        }
        const totalValues = containerContext.values.reduce((total, value) => total + value.value, 0)
        containerContext.setTotalValues(totalValues)
    }

    useEffect(() => {
        stateChanger(initialValue)
    }, [])

    const onIncrement = () => {
        setCurrentNumber(current => current + 1)
        listContext.ListOnIncrement(id, currentNumber)
        stateChanger(currentNumber + 1)
    }
    const onDecrement = () => {
        setCurrentNumber(current => current - 1)
        listContext.ListOnDecrement(id, currentNumber)
        stateChanger(currentNumber - 1)
    }

    return (
        <section>
            <h3>Counter {currentNumber}</h3>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </section>
    )
}
