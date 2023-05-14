import React from "react";
import './styles/App/App.css';

const App = () => {
    const [type, setType] = React.useState<string>('pizza');
    const selectOption = (e:React.MouseEvent<HTMLSelectElement>) => {
        const select = e.target as HTMLSelectElement;
        setType(select.options[select.selectedIndex].text);
    }
    return (
        <main className="App">
            <form className="App__form">
                <h1 className="App__form__title">ADD A DISH</h1>
                <input className="App__form__input" type='text' placeholder="name" required />
                <section className="App__form__timeInput">
                    <label className="App__form__timeInput__label">Preparation Time</label>
                    <div className="App__form__timeInput__div">
                        <input max='23' min={0} type='number' className="App__form__timeInput__div__input" required placeholder="00" />
                        <span className="App__form__timeInput__div__label">:</span>
                        <input max={59} min={0} type='number' className="App__form__timeInput__div__input" required placeholder="00" />
                    </div>
                </section>
                <select onClick={selectOption} className="App__form__select">
                    <option className="App__form__select__option">pizza</option>
                    <option className="App__form__select__option">soup</option>
                    <option className="App__form__select__option">sandwich</option>
                </select>
                {
                    type === "pizza" && (
                        <>
                            <input required className="App__form__input" type='number' placeholder="slices" />
                            <input required className="App__form__input" type='number' step='0.01' placeholder="diameter" />
                        </>
                    )
                }

                {
                    type === "soup" &&
                    <input required min={1} max={10} className="App__form__input" type='number' placeholder="spiciness" />
                }

                {
                    type === "sandwich" &&
                    <input required className="App__form__input" type='number' placeholder="slices of bread" />
                }
               
                <button className="App__form__button" type="submit">Send</button>
            </form>
        </main>
    )
}

export { App };