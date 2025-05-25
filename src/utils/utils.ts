import type {RootState} from "../app/store.ts";

export const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

export const loadState = (settings = {}) => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }

        let preloadedState = JSON.parse(serializedState)
        preloadedState = {
            ...preloadedState,
            counter: {
                ...preloadedState.counter,
                ...settings                 //передаем значение, которые нам нужно четко зафиксировать в сохраненном state
            }                               //например, isSetModeActivate = false, error = null
        }

        return preloadedState;
    } catch (err) {
        console.log('Error ', err)
        return undefined;
    }
};
