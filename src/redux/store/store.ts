import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "../reducers/form";

const store = configureStore({
    reducer: {
        form: formSlice.reducer
    }
});

export { store };