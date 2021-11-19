import Test2 from "./Test2";
import { renderHook, act } from '@testing-library/react-hooks';

describe('Test2', () => {

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
    ]

    test('Must add Users', () => {

        const { result } = renderHook(() => Test2());

        act(() => {
            result.current.handleSetUsers(users);
        });

        expect( result.current.users ).toStrictEqual(users);
    });

    test('Must return Julieta', () => {

        const { result } = renderHook(() => Test2());

        act(() => {
            result.current.handleSetUsers(users);
        });

        expect( result.current.returnTheYoungest() ).toStrictEqual(users[1]);
    });

    test('Must return array of ages', () => {

        const { result } = renderHook(() => Test2());

        act(() => {
            result.current.handleSetUsers(users);
        });

        expect( result.current.returnArrayOfAges() ).toStrictEqual([45, 28, 50, 80, 33]);
    });

    test('Must sort users', () => {

        const { result } = renderHook(() => Test2());

        act(() => {
            result.current.handleSetUsers(users);
        });
        act(() => {
            result.current.mustSortUsersByAge();
        });

        expect( result.current.users ).toStrictEqual([
            {
                name: 'Julieta',
                age: 28
            },
            {
                name: 'Paula',
                age: 33
            },
            {
                name: 'Pedro',
                age: 45
            },
            {
                name: 'Patricio',
                age: 50
            },
            {
                name: 'Mirta',
                age: 80
            }
        ]);
    });

});