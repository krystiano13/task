import React from "react";
import { InputValidation } from './InputValidation';

interface TimeInputInterface {
    changeTime: (value:string) => void
}

const TimeInput: React.FC<TimeInputInterface> = ({ changeTime }) => {
    const firstInput = React.useRef(document.createElement('input'));
    const secondInput = React.useRef(document.createElement('input'));

    const setTime = () => {
        const time = `${Number(firstInput.current.value) < 10 ? '0' : ''}` +
            `${firstInput !== null && firstInput.current.value}` +
            `:${ Number(secondInput.current.value) < 10 ? '0' : ''}` + 
            `${secondInput.current.value}:00`;
        changeTime(time);
    }
    return (
        <section className="App__form__timeInput">
            <label className="App__form__timeInput__label">Preparation Time</label>
            <div className="App__form__timeInput__div">
                <input ref={firstInput} maxLength={0} onChange={(e) => {
                    InputValidation(e, 12, 0, '00');
                    setTime();
                }} max='23' min={0} type='number' className="App__form__timeInput__div__input" required placeholder="00" />
                <span className="App__form__timeInput__div__label">:</span>
                <input ref={secondInput} onChange={(e) => {
                    InputValidation(e, 59, 0, '00');
                    setTime();
                }} max={59} min={0} type='number' className="App__form__timeInput__div__input" required placeholder="00" />
            </div>
        </section>
    )
}

export { TimeInput };