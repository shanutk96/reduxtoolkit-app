import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculatorSlice'; //importing "calculatorSlice.reducer"


export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,  // Adds the calculator reducer to the store
    //name of the slice : reducer functions
  },
});