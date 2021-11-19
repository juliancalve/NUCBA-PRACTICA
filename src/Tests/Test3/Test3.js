import React from 'react'
import { useState } from 'react'

const Test3 = () => {

    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    const addProducts = (allProducts) => {
        // Set allProducts into state
    }

    const addUsers = (allUsers) => {
        // Set allUsers into state, but EACH USER must have an autoincremental ID ( example: { name, age, id })
        // id must start at 1
    }

    const returnMixedArray = (propName) => {
        // Must return an array of users, which have a property with the name that comes by parameter,
        //and must have their respective products within that property,
        //the products are known by the userId of the product
        return [];
    }

    return {
        products,
        users,
        addProducts,
        addUsers,
        returnMixedArray
    }
}

export default Test3
