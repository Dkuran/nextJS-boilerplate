export const POST = 'POST';
export const GET = 'GET';

export const getCommonHeaders = () => ({
  'Content-Type': 'application/json',
});

export const FETCHING_STATUS = 'Fetching';
export const FETCHED_STATUS = 'Fetched';
export const ERROR_STATUS = 'Error';
export const IDLE_STATUS = 'Idle';
export const CREATING_STATUS = 'Creating';
