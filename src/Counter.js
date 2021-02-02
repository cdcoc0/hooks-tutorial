import React, {useReducer} from 'react';

function reducer(state, action) {
    //action.type에 따라 다른 작업 수행
    switch(action.type) {
        case 'INCREMENT': 
            return {value: state.value + 1};
        case 'DECREMENT': 
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter = () => {
    // const [value, setValue] = useState(0);
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return(
        <div>
            <p>
                현재 카운터 값: <b>{state.value}</b>
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+!</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
            {/* <p>
                현재 카운터 값: <b>{value}</b>
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button> */}
            <hr></hr>
        </div>
    )
}

export default Counter;