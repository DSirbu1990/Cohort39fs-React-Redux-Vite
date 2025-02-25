import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import {counterSlice} from "store/redux/counter/counterSlice"
import { feedbackSlice } from "./redux/feedback/feedbackSlice"
import { employeeDataSlice } from "./redux/employeeData/employeeDataSlice"
import { catFactSlice } from "./redux/catFact/catFactSlice"
import { randomJokeSlice } from "./redux/randomJoke/randomJokeSlice"


// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.

const rootReducer = combineSlices(counterSlice, feedbackSlice, employeeDataSlice, catFactSlice,randomJokeSlice)


// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  })
  
  return store
}

export const store = makeStore()

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
