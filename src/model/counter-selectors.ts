import type {RootState} from '../app/store'

export const selectCounterValue = (state: RootState) => state.counter.countValue
export const selectMaxCount = (state: RootState) => state.counter.maxCount
export const selectMinCount = (state: RootState) => state.counter.minCount
export const selectIsModeActivate = (state: RootState) => state.counter.isSetModeActivate
export const selectError = (state: RootState) => state.counter.error
/*export const selectCounter = (state: RootState) => state.counter
export const selectCounterSettings = createSelector(
    [selectCounter],
    (counter: CounterState): SettingsState => ({
        maxCount: counter.maxCount,
        minCount: counter.minCount,
        isSetModeActivate: counter.isSetModeActivate,
        error: counter.error
    })
)*/

/*(
    selectCounterValue,
    (counter: CounterState) => ( {
        maxCount,
        minCount,
        isSetModeActivate,
        error
}))*/