import { StateType } from "./StateType";

export const sendDataToApi = (
    state: StateType,
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
    console.log(state);

    fetch('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSuccess(true);
            setModal(true);
            return data;
        })
        .catch(err => {
            setError(err);
            setSuccess(false);
            console.log(err)
        })
}