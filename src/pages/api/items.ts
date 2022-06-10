import { NextApiRequest, NextApiResponse } from 'next';
import { OK } from '../../middleware/statusCode';
import { IFetchedItem } from '../../types';

const getItems = async (_req: NextApiRequest, res: NextApiResponse) => {
  const itemsCount = Math.floor(Math.random() * 11);
  setTimeout('', 5000);
  const value: IFetchedItem[] = Array(itemsCount).map((_item, index) => ({
    key: `item-${index}`,
    label: `fetched item-${index}`,
    value: index,
  }));
  res.status(OK).json({ success: true, value });
};

export default getItems;
