import React from "react";

interface TypeSelectInterface {
    selectOption: (e : React.MouseEvent < HTMLSelectElement >) => void
}

const TypeSelect: React.FC<TypeSelectInterface> = ({selectOption}) => {
    return (
        <select onClick={selectOption}
            className="App__form__select">
            <option className="App__form__select__option">pizza</option>
            <option className="App__form__select__option">soup</option>
            <option className="App__form__select__option">sandwich</option>
        </select>
    );
}

export { TypeSelect };
