import {createAction, createReducer} from "@reduxjs/toolkit";

export const setCountValueAC = createAction<{ countValue: number }>('setCountValue')
export const setMaxCountAC = createAction<{ maxValue: number }>('setMaxCount')
export const setMinCountAC = createAction<{ minValue: number }>('setMinCount')
export const incrementAC = createAction('increment')
export const decrementAC = createAction('decrement')
export const resetAC = createAction('reset')
export const setActivateAC = createAction<{ mode: boolean }>('setActivate')
export const errorAC = createAction<{ error: string | null }>('error')

export type CounterState = {
    countValue: number
    maxCount: number
    minCount: number
    isSetModeActivate: boolean
    error: string | null
}

const initialState: CounterState = {
    countValue: 0,
    maxCount: 5,
    minCount: 0,
    isSetModeActivate: false,
    error: null,
}

export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(setCountValueAC, (state, action) => {
            state.countValue = action.payload.countValue
        })
        .addCase(setMaxCountAC, (state, action) => {
            state.maxCount = action.payload.maxValue
        })
        .addCase(setMinCountAC, (state, action) => {
            state.minCount = action.payload.minValue
        })
        .addCase(incrementAC, (state, action) => {
            if (state.countValue < state.maxCount) {
                state.countValue = state.countValue + 1
            }
        })
        .addCase(decrementAC, (state, action) => {
            if (state.countValue > state.minCount) {
                state.countValue = state.countValue - 1
            }
        })
        .addCase(resetAC, (state, action) => {
            state.countValue = state.minCount
        })
        .addCase(setActivateAC, (state, action) => {
            state.isSetModeActivate = action.payload.mode
        })
        .addCase(errorAC, (state, action) => {
            state.error = action.payload.error
        })
})
