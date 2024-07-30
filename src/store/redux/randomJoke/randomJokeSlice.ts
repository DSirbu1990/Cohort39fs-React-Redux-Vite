import axios from "axios"
import { v4 } from "uuid"
import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { RandomJokeSliceState, RandomJoke } from "./types"

const randomJokeInitialState: RandomJokeSliceState = {
  randomJoks: [],
  error: undefined,
  isFetching: false,
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOM_JOKE",
  initialState: randomJokeInitialState,
  reducers: create => ({
    getRandomJoke: create.asyncThunk(
      async (payload: any) => {
        let response = await axios.get(
          "https://official-joke-api.appspot.com/random_joke",
        )
        return response
      },
      {
        pending: (state: RandomJokeSliceState) => {
          state.error = undefined
          state.isFetching = true
        },
          fulfilled: (state: RandomJokeSliceState, action) => {
            state.isFetching = false
          state.randomJoks = [
            ...state.randomJoks,
            {
              joke: action.payload.data.setup,
              punchline: action.payload.data.punchline,
              id: v4(),
            },
          ]
        },
          rejected: (state: RandomJokeSliceState, action) => {
            state.isFetching = false
          state.error = action.error.message
        },
      },
    ),
    deleteRandomJoke: create.reducer(
      (state: RandomJokeSliceState, action: PayloadAction<string>) => {
        state.randomJoks = state.randomJoks.filter((randomJoke: RandomJoke) => {
          return randomJoke.id !== action.payload
        })
      },
    ),
    deleteAllJoks: create.reducer(() => randomJokeInitialState),
  }),

  selectors: {
    randomJoks: (state: RandomJokeSliceState) => state.randomJoks,
      error: (state: RandomJokeSliceState) => state.error,
    isFetching: (state: RandomJokeSliceState) => state.isFetching
  },
})

export const randomJokeActions = randomJokeSlice.actions

export const randomJokeSelectors = randomJokeSlice.selectors
