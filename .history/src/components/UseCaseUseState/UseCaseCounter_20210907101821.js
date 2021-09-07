import { useState } from "react";

const UseCaseCounter = props => {
    const [counter, setCounter] = useState(0);

    // Use setState function form because the new state depends on the previous one
    const clickHandlerDecrease = () => {
        setCounter(prevState => prevState--);
    };

    const clickHandlerIncrease = () => {
        setCounter(prevState => prevState++);
    };

    return (
        <>
            <hr />
            <h2>useState use case</h2>
            <h3>Counter</h3>
            <button onClick={clickHandlerDecrease}>--</button>
            <span> {counter} </span>
            <button onClick={clickHandlerIncrease}>++</button>
        </>
    );
};

export default UseCaseCounter;