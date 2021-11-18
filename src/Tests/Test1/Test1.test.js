import Test1 from "./Test1";
import { renderHook, act } from '@testing-library/react-hooks';

describe('Test1', () => {

    test('Must add number', () => {

        const { result } = renderHook(() => Test1());

        act(() => {
            result.current.addNumber(5);
        });

        expect( result.current.number ).toBe(5);
    });

    test('Must substract number', () => {

        const { result } = renderHook(() => Test1());

        act(() => {
            result.current.addNumber(5);
        });
        act(() => {
            result.current.substractNumber(4);
        });
        act(() => {
            result.current.substractNumber(4);
        });

        expect( result.current.number ).toBe(-3);
    });

    test('Must return if is even', () => {

        const { result } = renderHook(() => Test1());

        act(() => {
            result.current.addNumber(4);
        });

        expect( result.current.checkEven() ).toBe(true);

        act(() => {
            result.current.addNumber(1);
        })

        expect( result.current.checkEven() ).toBe(false);
    });

    test('Must return if is positive', () => {

        const { result } = renderHook(() => Test1());

        act(() => {
            result.current.addNumber(4);
        });

        expect( result.current.checkIfIsPositive() ).toBe(true);

        act(() => {
            result.current.substractNumber(10);
        });

        expect( result.current.checkIfIsPositive() ).toBe(false);
    });

});