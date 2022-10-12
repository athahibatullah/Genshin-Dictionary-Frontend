import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: "DataSlice",
    initialState: {
        APIData: []
    },
    reducers: {
        storeAPIData: (state, data) => {
            state.APIData = data.payload;
        }
    }
})

export const {storeAPIData} = DataSlice.actions
export default DataSlice.reducer;