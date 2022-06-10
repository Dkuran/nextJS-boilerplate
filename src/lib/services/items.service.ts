import { getCommonHeaders, POST } from '../../constants/fetch';
import { Result } from '../../middleware/common';
import { IFetchedItem } from '../../types';

export const getItems = async () => {
  const response = await fetch('/api/items', {
    method: POST,
    headers: getCommonHeaders(),
  });
  const responseBody: Result<IFetchedItem[]> = await response.json();
  return responseBody;
};
