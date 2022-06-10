import { PayloadAction } from '@reduxjs/toolkit';
import { BaseError, Result } from '../../middleware/common';
import { IFetchedItem, ItemsState } from '../../types';

const setItems = (state: ItemsState, action: PayloadAction<Result<IFetchedItem[], BaseError>>) => {
  state.items = action.payload.success ? action.payload.value : [];
};

const reducers = {
  setItems
};

export default reducers;
