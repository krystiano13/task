import React from "react";
import './Modal.css';

interface ModalInterface {
    success: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    error: string,
}

const Modal: React.FC<ModalInterface> = ({ success, error, setModal }) => {
    return (
        <section className="Modal">
            <h2 className="Modal__title">{success ? 'Success !' : 'Failure'}</h2>
            <h3 className="Modal__text">{success ? 'Data was sent properly' : error !== '' ? 'Something went wrong' : error}</h3>
            <button onClick={() => setModal(false)} className="Modal__button">Close</button>
        </section>
    )
}

export { Modal };