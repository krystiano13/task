import React from "react";
import { TypeSelect } from "./components/TypeSelect";
import { TimeInput } from "./components/TimeInput";
import { useSelector } from "react-redux";
import './styles/App/App.css';
import { StateType } from "./redux/reducers/form";
import { InputValidation } from "./components/InputValidation";

const App = () => {
    const [type, setType] = React.useState<string>('pizza');
    const selectOption = (e: React.MouseEvent<HTMLSelectElement>) => {
        const select = e.target as HTMLSelectElement;
        setType(select.options[select.selectedIndex].text);
    }
    const state = useSelector<StateType>((state) => state.form);
    React.useEffect(() => {
        console.log(state);
    }, [state]);
    return (
        <main className="App">
            <form className="App__form">
                <h1 className="App__form__title">ADD A DISH</h1>
                <input className="App__form__input" type='text' placeholder="name" required />
                <TimeInput />
                <TypeSelect selectOption={selectOption} />
                {
                    type === "pizza" && (
                        <>
                            <input required onChange={(e) => InputValidation(e, 16, 4, '4')} className="App__form__input" type='number' placeholder="slices" />
                            <input required onChange={(e) => InputValidation(e, 10, 3, '3')} className="App__form__input" type='number' step='0.01' placeholder="diameter" />
                        </>
                    )
                }

                {
                    type === "soup" &&
                    <input required onChange={(e) => InputValidation(e, 10, 1, '1')} className="App__form__input" type='number' placeholder="spiciness" />
                }

                {
                    type === "sandwich" &&
                    <input required onChange={(e) => InputValidation(e, 10, 1, '1')} className="App__form__input" type='number' placeholder="slices of bread" />
                }

                <button className="App__form__button" type="submit">Send</button>
            </form>
        </main>
    )
}
export { App };