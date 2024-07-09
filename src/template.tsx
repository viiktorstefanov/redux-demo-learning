import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { decrement, increment, incrementByAmount } from "./state/counter/counterSlice";

export const TestComponent : React.FC = () => {

    const count = useSelector(( state: RootState ) => {
        return state.counter.value
    });

    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(incrementByAmount(10))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
};