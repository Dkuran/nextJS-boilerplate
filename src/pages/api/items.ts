import { NextApiRequest, NextApiResponse } from 'next';
import { OK } from '../../middleware/statusCode';
import { IFetchedItem } from '../../types';

const getItems = async (_req: NextApiRequest, res: NextApiResponse) => {
  setTimeout(() => {
    const itemsCount = Math.floor(Math.random() * 11);
    const value: IFetchedItem[] = [...Array(itemsCount)].map((_item, index) => ({
      key: `item-${index}`,
      label: `fetched item-${index}`,
      value: index
    }));
    res.status(OK).json({ success: true, value });
  }, 5000);
};

export default getItems;
