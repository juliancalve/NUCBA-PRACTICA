import { useState } from 'react'

const Test1 = () => {

    const [number, setNumber] = useState(0);

    const addNumber = (num) => {
        // TODO
        // must add the number that comes by parameter to the state 
    }

    const substractNumber = (num) => {
        // TODO
        // must substract the number that comes by parameter to the state 
    }

    const checkEven = () => {
        // TODO
        // must check if state is even or not and return the answer

        return {};
    }

    const checkIfIsPositive = () => {
        // must check if state is positive or not and return the answer
        return {}
    }

    return {
        number,
        addNumber,
        substractNumber,
        checkEven,
        checkIfIsPositive
    }
}

export default Test1;
