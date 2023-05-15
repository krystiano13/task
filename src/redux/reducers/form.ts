import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
    name: "form",
    initialState: {
        dishName: "JD",
        preparationTime: "00 : 00",
        type: "pizza",
        numberOfSlices: 0,
        diameter: 0.00,
        spiciness: 1,
        slicesOfBread: 0
    },
    reducers: {
        setType: (state,action) => {
            state.type = action.payload;
        },
        setPreparationTime: (state, action) => {
            state.preparationTime = action.payload
        },
        setOtherValues: (state, action) => {
            state.dishName = action.payload.dishName;
            switch (state.type) {
                case "pizza":
                    state.numberOfSlices = action.payload.slices;
                    state.diameter = action.payload.diameter;
                    break;
                case "soup":
                    state.spiciness = action.payload.spiciness;
                    break;
                case "sandwich":
                    state.slicesOfBread = action.payload.slicesOfBread;
                    break;
            } 
        }
    }
});

export type StateType = {
    form: {
        dishName: string;
        preparationTime: string;
        type: string;
        numberOfSlices: number;
        diameter: number;
        spiciness: number;
        slicesOfBread: number;
    }
}

export const { setType, setPreparationTime, setOtherValues } = formSlice.actions;