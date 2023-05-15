import React from "react";

interface TypeSelectInterface {
    changeType: (value:string) => void
}

const TypeSelect:React.FC<TypeSelectInterface> = ({ changeType }) => {
    const selectOption = (e: React.MouseEvent<HTMLSelectElement>) => {
        const select = e.target as HTMLSelectElement;
        changeType(select.options[select.selectedIndex].text)
    }
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
