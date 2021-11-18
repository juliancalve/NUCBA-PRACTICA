import { useState } from 'react'

const Test2 = () => {

    const [users, setUsers] = useState([]);

    const handleSetUsers = (allUsers) => {
        // Must set users 
    }

    const returnTheYoungest = () => {
        // Must return the youngest User
        return {};
    }

    const returnArrayOfAges = () => {
        // return an age-only array
        return [];
    }

    const mustSortUsersByAge = () => {
        // Must set new State sorted
    }


    return {
        users,
        handleSetUsers,
        returnTheYoungest,
        returnArrayOfAges,
        mustSortUsersByAge
    }
}

export default Test2
