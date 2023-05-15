import React from "react";

const InputValidation = (e: React.ChangeEvent<HTMLInputElement>, max: number, min: number, minText: string) => {
    if (Number(e.target.value) < min) {
        e.target.value = minText;
    }
    if (Number(e.target.value) > max) {
       e.target.value = String(max);
    }
};

export { InputValidation };
