import { StateType } from "./StateType";

export const sendDataToApi = (
    state: StateType,
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
    fetch('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    })
        .then(res => {
            if (res.status >= 400 && res.status < 600) {
                setError(true);
                setModal(true);
                return false;
            }
            setSuccess(true);
            setModal(true);
            return res.json()
        })
        .then(data => console.log(data));
}