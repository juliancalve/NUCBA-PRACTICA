import Test3 from "./Test3";
import { renderHook, act } from '@testing-library/react-hooks';

describe('Test3', () => {

    const users = [
        {
            name: 'Pedro',
            age: 45
        },
        {
            name: 'Julieta',
            age: 28
        },
        {
            name: 'Patricio',
            age: 50
        },
        {
            name: 'Mirta',
            age: 80
        },
        {
            name: 'Paula',
            age: 33
        }
    ];

    const products = [
        {
            userId: 5,
            products: ['potatoe', 'pizza']
        },
        {
            userId: 2,
            products: ['apple', 'bag', 'coffee']
        },
        {
            userId: 4,
            products: ['banana']
        },
        {
            userId: 5,
            products: ['ice cream']
        }
    ]

    test('Must add Users', () => {

        const { result } = renderHook(() => Test3());

        act(() => {
            result.current.addUsers(users);
        });

        expect( result.current.users ).toStrictEqual([
            {
                name: 'Pedro',
                age: 45,
                id: 1
            },
            {
                name: 'Julieta',
                age: 28,
                id: 2
            },
            {
                name: 'Patricio',
                age: 50,
                id: 3
            },
            {
                name: 'Mirta',
                age: 80,
                id: 4
            },
            {
                name: 'Paula',
                age: 33,
                id: 5
            }
        ]);
    });

    test('Must add Products', () => {

        const { result } = renderHook(() => Test3());

        act(() => {
            result.current.addProducts(products);
        });

        expect( result.current.products ).toStrictEqual([
            {
                userId: 5,
                products: ['potatoe', 'pizza']
            },
            {
                userId: 2,
                products: ['apple', 'bag', 'coffee']
            },
            {
                userId: 4,
                products: ['banana']
            },
            {
                userId: 5,
                products: ['ice cream']
            }
        ]);
    });

    test('Must return a mixed array of users with products', () => {

        const { result } = renderHook(() => Test3());

        act(() => {
            result.current.addProducts(products);
        });
        act(() => {
            result.current.users(users);
        });

        expect( result.current.returnMixedArray('purchasedProducts') ).toStrictEqual([
            {
                name: 'Pedro',
                age: 45,
                id: 1,
                purchasedProducts: []
            },
            {
                name: 'Julieta',
                age: 28,
                id: 2,
                purchasedProducts: ['apple', 'bag', 'coffee']
            },
            {
                name: 'Patricio',
                age: 50,
                id: 3,
                purchasedProducts: []
            },
            {
                name: 'Mirta',
                age: 80,
                id: 4,
                purchasedProducts: ['banana']
            },
            {
                name: 'Paula',
                age: 33,
                id: 5,
                purchasedProducts: ['potatoe', 'pizza', 'ice cream']
            }
        ]);
    });



});