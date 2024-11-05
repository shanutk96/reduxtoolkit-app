import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue1, setValue2, addValues, subtractValues } from './calculatorSlice';

function App() {
  const dispatch = useDispatch();
  const { value1, value2, result } = useSelector((state) => state.calculator);
  //This selectorFuction that takes the entire Redux state as an argument (state) and returns the part of the state that corresponds
  //to the calculator slice.

  return (
    <div style={{ padding: '20px' }}>
      <h1>Calculator</h1>
      
      <div>
        <input
          type="text"
          placeholder="Enter value 1"
          value={value1}
          onChange={(e) => dispatch(setValue1(Number(e.target.value)))} //e.target.value gives the current value of this input
        />
        <input
          type="text"
          placeholder="Enter value 2"
          value={value2}
          onChange={(e) => dispatch(setValue2(Number(e.target.value)))}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={() => dispatch(addValues())}>Add</button>
        <button onClick={() => dispatch(subtractValues())}>Subtract</button>
      </div>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
