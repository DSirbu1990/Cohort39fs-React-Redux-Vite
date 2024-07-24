import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { CounterSliceState } from "./types"

// Прописываем значения по умолчания для count, чтобы потом передать в Global State в reudux store
const counterInitialState: CounterSliceState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  // name - это имя для slice, имя используется для нахожения событий слайса в redux devtools и для идентификации actions
  name: "COUNTER",
  // Значнее по умолчанию для этого slice
  initialState: counterInitialState,
  // Более длинный ситаксис написания через return, снизу указан сокращенный синтаксис того же самого return
  // reducers: (create) => {
  //     return {}
  // }
  // reducers - функции, изменяющие состояние counterSlice
  reducers: create => ({
    plus: create.reducer((state: CounterSliceState) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count = state.count - 1
    }),
    multiply: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        // action - это обьект состоязий из 2 св-в
        // 1 - type- строка, тип экшена, по которому у нас вызывется reducer
        // 2 - payload - это данные, которые вы хотите передать из компонента в reducer
        console.log(action.payload)
        state.count =  Number((state.count * action.payload).toFixed(2))
      },
    ),
    divide: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        state.count = Number((state.count / action.payload).toFixed(2))
      },
    ),
  }),
  // selectors - мы прописываем, какие именно данные мы хотим отдавать компонентам
  selectors: {
    count: (state: CounterSliceState) => {
      return state.count
    },
  },
})

// сounterSlice cам создает actions для каждого отдельного reducer
export const counterSliceActions = counterSlice.actions

// selectors - это данные которые мы будем отдавать компонентам, т.е позволять компонентам подписываться
// на redux store
export const counterSliceSelectors = counterSlice.selectors
