import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './Reducers/category';

export const store = configureStore({
    reducer: {
        categoryReducer: categoryReducer,
    },
});
