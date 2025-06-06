import {CounterSettings} from "./сounterSettings/CounterSettings.tsx";
import {CounterDisplay} from "./сounterDisplay/CounterDisplay.tsx";
import styles from './сounterWithTwoPanels.module.css'
import {useAppDispatch} from "../../common/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../common/hooks/useAppSelector.ts";
import {
    selectCounterValue,
    selectError,
    selectIsModeActivate,
    selectMaxCount,
    selectMinCount
} from "../../model/counter-selectors.ts";
import {
    decrementAC,
    errorAC,
    incrementAC,
    resetAC,
    setActivateAC,
    setCountValueAC,
    setMaxCountAC,
    setMinCountAC
} from "../../model/counter-reducer.ts";

export const CounterWithTwoPanels = () => {

    const dispatch = useAppDispatch()
    const countValue = useAppSelector(selectCounterValue)
    const maxCount = useAppSelector(selectMaxCount)
    const minCount = useAppSelector(selectMinCount)
    const isSetModeActivate = useAppSelector(selectIsModeActivate)
    const error = useAppSelector(selectError)

    const onIncrement = () => {
            dispatch(incrementAC())
    }

    const onDecrement = () => {
            dispatch(decrementAC())
    }

    const onReset = () => {
        dispatch(resetAC())
    }

    const onSetActivate = () => {
        dispatch(setActivateAC({mode:true}))
    }

    const onSetDeactivate = () => {
        dispatch(setActivateAC({mode:false}))
    }

    const onApplySettings = (maxCount: number, minCount: number) => {
        if (!error) {
            dispatch(errorAC({error:null}))
            dispatch(setActivateAC({mode:false}))
            dispatch(setCountValueAC({countValue: minCount}))
            dispatch(setMaxCountAC({maxValue: maxCount}))
            dispatch(setMinCountAC({minValue: minCount}))
        }
    }

    const onError = (error: string | null) => {
        dispatch(errorAC({error: error}))
    }

    return (
        <div className={styles.counter}>
            <CounterSettings maxCount={maxCount}
                             minCount={minCount}
                             isActivate={isSetModeActivate}
                             onSetActivate={onSetActivate}
                             onSetDeactivate={onSetDeactivate}
                             onApplySettings={onApplySettings}
                             error={error}
                             onError={onError}
            />
            <CounterDisplay countValue={countValue}
                            maxCount={maxCount}
                            minCount={minCount}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onReset={onReset}
                            error={error}
            />
        </div>
    );
};
