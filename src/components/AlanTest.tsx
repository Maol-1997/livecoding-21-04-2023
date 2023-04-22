import {forwardRef, useImperativeHandle, useRef} from "react";

const ChildComponent = forwardRef((_props, ref) => {
    useImperativeHandle(ref, () => ({
        test: () => {
            console.log('test')
        }
    }));
    return <h1>ChildComponent</h1>
});
export default function AlanTest() {
    const childComponentRef = useRef(null);
    const handlerClick = () => {
        childComponentRef.current.test()
    }
    return (
        <>
            <h1>AlanTest</h1>
            <button onClick={handlerClick}>click</button>
            <ChildComponent ref={childComponentRef}/>
        </>
    )
}
