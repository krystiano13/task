import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
    name: "form",
    initialState: {
        name: "",
        preparation_time: "00 : 00",
        type: "pizza",
        no_of_slices: 0,
        diameter: 0.00,
        spiciness_scale: 1,
        slices_of_bread: 1,     
    },
    reducers: {
        setType: (state,action) => {
            state.type = action.payload;
        },
        setPreparationTime: (state, action) => {
            state.preparation_time = `${action.payload}:00`
        },
        setOtherValues: (state, action) => {
            state.name = action.payload.dishName;
            state.no_of_slices = Number(action.payload.slices);
            switch (state.type) {
                case "pizza":
                    state.no_of_slices = Number(action.payload.slices);
                    state.diameter = action.payload.diameter;
                    break;
                case "soup":
                    state.spiciness_scale = action.payload.spiciness;
                    break;
                case "sandwich":
                    state.slices_of_bread = action.payload.slicesOfBread;
                    break;
            } 
        },
    }
});

export const { setType, setPreparationTime, setOtherValues } = formSlice.actions;