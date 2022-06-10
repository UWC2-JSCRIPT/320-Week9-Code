import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from './counterStore';

export default function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const increment = useCallback(
        () => dispatch(incrementAction(10)),
        [dispatch]
    );
    const decrement = useCallback(
        () => dispatch(decrementAction(10)),
        [dispatch]
    );

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}
