
import { createSlice } from '@reduxjs/toolkit';
import { fetchData, updateHistoricalList } from './Thunk';
export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        historyData: []
    },
    reducers: {
        // Vos autres reducers ici
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = "";
                console.log('je suis dans le reducer', action.payload);
            })
            .addCase(fetchData.rejected, (state, action) => {
                console.log('je suis dans le reducer rejected', action.payload);
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(updateHistoricalList.fulfilled, (state, action) => {
                console.log("chui dans le reducer de l'historique", action.payload);
                // Ajoute le nouvel item à historyData
                state.historyData.push(action.payload);
            });
    }
});

export default dataSlice.reducer;