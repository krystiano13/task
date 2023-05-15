import React from "react";
import { useDispatch } from "react-redux";
import { setPreparationTime } from "../redux/reducers/form";
import { InputValidation } from "./InputValidation";

const TimeInput = () => {
    const dispatch = useDispatch();

    const setTime = () => {
        const firstValue = firstInput.current?.value;
        const secondValue = secondInput.current?.value;

        dispatch(setPreparationTime(`${firstValue} : ${secondValue}`));
    }

    const firstInput = React.useRef<HTMLInputElement | null>(null);
    const secondInput = React.useRef<HTMLInputElement | null>(null);

    return (
        <section className="App__form__timeInput">
            <label className="App__form__timeInput__label">Preparation Time</label>
            <div className="App__form__timeInput__div">
                <input maxLength={0} onChange={(e) => {
                    InputValidation(e, 12, 0, '00');
                    setTime();
                }} ref={firstInput} max='23' min={0} type='number' className="App__form__timeInput__div__input" required placeholder="00" />
                <span className="App__form__timeInput__div__label">:</span>
                <input onChange={(e) => {
                    InputValidation(e, 59, 0, '00');
                    setTime();
                }} ref={secondInput} max={59} min={0} type='number' className="App__form__timeInput__div__input" required placeholder="00" />
            </div>
        </section>
    )
}

export { TimeInput };