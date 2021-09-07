import { useState } from "react";

const UseCaseCounter = props => {
    const [counter, setCounter] = useState(0);

    // Use setState function form because the new state depends on the previous one
    const clickHandlerDecrease = () => {
        // Converting the prevState to number to avoid errors
        setCounter(prevState => +prevState - 1);
    };

    const clickHandlerIncrease = () => {
        setCounter(prevState => +prevState + 1);
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