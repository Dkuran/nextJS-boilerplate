import { UNAUTHORIZED } from './statusCode';

export interface BaseError {
  message: string;
}

interface Success<V> {
  success: true;
  value: V;
}

export interface Failure<E extends BaseError = BaseError> {
  success: false;
  error: E;
}

export type Result<V, E extends BaseError = BaseError> =
  | Success<V>
  | Failure<E>;

export interface ErrorResponse {
  error: string;
}

export const unexpectedError = (context: string): Failure => ({
  success: false,
  error: { message: `An unexpected error occurred while ${context}.` },
});

export const errorFromResponse = async (
  response: Response,
): Promise<Failure> => {
  if (response.status === UNAUTHORIZED) {
    return {
      success: false,
      error: { message: 'Unauthorized error' },
    };
  }
  const responseBody: ErrorResponse = await response.json();
  return { success: false, error: { message: responseBody.error } };
};
