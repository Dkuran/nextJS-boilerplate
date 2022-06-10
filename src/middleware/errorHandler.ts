import { errorFromResponse, unexpectedError } from './common';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from './statusCode';

const errorHandler = (response: Response, context: string) => {
  if (response.status >= INTERNAL_SERVER_ERROR) {
    return unexpectedError(context);
  } else if (response.status >= BAD_REQUEST) {
    return errorFromResponse(response);
  }
  return undefined;
};

export default errorHandler;
