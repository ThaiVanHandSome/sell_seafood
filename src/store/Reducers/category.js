import { createSlice } from '@reduxjs/toolkit';
import { findAll } from '~/services/category';

const val = await findAll();
const initialState = {
    list: val,
};

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
