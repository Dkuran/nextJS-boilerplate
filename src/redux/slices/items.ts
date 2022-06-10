import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { getItems } from '../../lib/services/items.service';
import { ItemsState } from '../../types';
import itemReducers from '../reducers/items';

const initialState: ItemsState = {
  items: [],
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: itemReducers,
});

export const fetchItems =
  () => async (dispatch: Dispatch<object>) => {
    const response = await getItems();
    dispatch({ type: setItems, payload: response });
  };

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
