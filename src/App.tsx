import React from "react";
import './styles/App/App.css';

const App = () => {
    const [type, setType] = React.useState<string>('pizza');
    return (
        <main className="App">
            <form className="App__form">
                <h1 className="App__form__title">ADD A DISH</h1>
                <input className="App__form__input" type='text' placeholder="name" />  
                <input className="App__form__input" type='text' placeholder="preparation time" />
                <select className="App__form__select">
                    <option className="App__form__select__option">pizza</option>
                    <option className="App__form__select__option">soup</option>
                    <option className="App__form__select__option">sandwich</option>
                </select>
                {
                    type === "pizza" && (
                        <>
                            <input className="App__form__input" type='number' placeholder="slices" />
                            <input className="App__form__input" type='number' step='0.01' placeholder="diameter" />
                        </>
                    )
                }

                {
                    type === "soup" &&
                    <input className="App__form__input" type='number' placeholder="spiciness" />
                }

                {
                    type === "sandwich" &&
                    <input className="App__form__input" type='number' placeholder="slices of bread" />
                }
               
                <button className="App__form__button" type="submit">Send</button>
            </form>
        </main>
    )
}

export { App };