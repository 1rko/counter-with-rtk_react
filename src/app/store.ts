import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "../model/counter-reducer.ts";
import {loadState, saveState} from "../utils/utils.ts";

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
    counter: counterReducer,
})

///подгружаем state из LocalStorage
const preloadedState = loadState({isSetModeActivate: false, error: null});

// создание store
export const store = configureStore({
    reducer: rootReducer,
    preloadedState
})

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store