import { StateType } from "./StateType";

export const sendDataToApi = (state: StateType) => {
    console.log(state);

    fetch('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => console.log(err))
}