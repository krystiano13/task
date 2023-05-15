import React from "react";
import { TypeSelect } from "./components/AppComponents/TypeSelect";
import { TimeInput } from "./components/AppComponents/TimeInput";
import './styles/App/App.css';
import { Form, Field } from 'react-final-form';
import { sendDataToApi } from "./components/AppComponents/sendDataToApi";
import { StateType } from "./components/AppComponents/StateType";

const App = () => {
    const [type, setType] = React.useState<string>('pizza');
    const [time, setTime] = React.useState<string>('00:00:00');
    const [success, setSuccess] = React.useState<boolean>(false);
    const changeType = (value: string) => setType(value);
    const changeTime = (value: string) => setTime(value);
    return (
        <main className="App">
            <Form
                onSubmit={(values) => {
                    const obj = { preparation_time: time,...values, type: type };
                    sendDataToApi(obj as StateType);
                }}
                render={(renderProps) => {
                    return (
                        <form onSubmit={renderProps.handleSubmit} className="App__form">
                            <h1 className="App__form__title">ADD A DISH</h1>
                            <Field name="name" render={({ input }) => (
                                <input
                                    {...input}
                                    className="App__form__input"
                                    type='text'
                                    placeholder="name"
                                    required
                                />
                            )}>
                            </Field>

                            <TimeInput changeTime={changeTime} />
                            <TypeSelect changeType={changeType} />
                            {
                                type === "pizza" && (
                                    <>
                                        <Field name="no_of_slices" render={({ input }) => (
                                            <input {...input} min={4} max={16} required className="App__form__input" type='number' placeholder="slices" />
                                        )} />
                                        <Field name="diameter" render={({ input }) => (
                                            <input {...input} min={3} max={10} required className="App__form__input" type='number' step='0.01' placeholder="diameter" />
                                        )} />
                                    </>
                                )
                            }

                            {
                                type === "soup" &&
                                <Field name="spiciness_scale" render={({ input }) => (
                                    <input { ...input } required min={1} max={10} className="App__form__input" type='number' placeholder="spiciness" />
                                )} />
                            }

                            {
                                type === "sandwich" &&
                                <Field name="slices_of_bread" render={({ input }) => (
                                    <input { ...input } required min={1} max={12} className="App__form__input" type='number' placeholder="slices of bread" />
                                )} />
                            }

                            <button className="App__form__button" type="submit">Send</button>
                        </form>
                    )
                }}>
            </Form>
        </main>
    )
}
export { App };