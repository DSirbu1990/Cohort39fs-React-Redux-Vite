import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { FeedbackSliceState } from "./types"

const feedbackInitialState: FeedbackSliceState ={
    like: 0,
    dislike: 0
}

export const feedbackSlice = createAppSlice ({
    name: "FEEDBACK",

    initialState: feedbackInitialState,

    reducers: create => ({
        like: create.reducer((state: FeedbackSliceState) => {
            state.like = state.like + 1
        }),

        dislike: create.reducer((state:FeedbackSliceState) => {
            state.dislike = state.dislike + 1
        }),

        resetResults: create.reducer((state:FeedbackSliceState) =>{
            state.like = 0,
            state.dislike = 0
        })
    }),
    selectors: {
        like: (state: FeedbackSliceState) => {
            return state.like
        },
        dislike: (state: FeedbackSliceState) => {
            return state.dislike
        }
    }
})

export const feedbackSliceActions =feedbackSlice.actions;

export const feedbackSliceSelectors = feedbackSlice.selectors;