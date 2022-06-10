import { RootState } from "../store";

export const selectFetchedItems = (state: RootState) => state.items.items;
