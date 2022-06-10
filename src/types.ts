export interface IFetchedItem {
  key: string;
  label: string;
  value: number;
}

export type ItemsState = {
  items: IFetchedItem[];
};
