import { createSlice } from '@reduxjs/toolkit';
import { findAll } from '~/services/category';

const val = await findAll();
const initialState = {
    list: val,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        reNewData: async (state) => {
            return await findAll();
        },
    },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
