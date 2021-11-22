
import { CommentType, UsersListResponse } from '../types/dumMyApiResponses';
  
const BASE_URL = 'https://dummyapi.io/data/v1/';
const COMMENT_URL = `${BASE_URL}user`;
const APP_ID_VALUE = '61900d43125705524880ead2';
const APP_ID_FIELD = 'app-id';


  export const getUsersList = (
    page: number,
    limit: number,
    callback: (resp: Array<CommentType>) => void,
    errorCallback?: (resp: any) => void,
  ) => fetch(`${COMMENT_URL}?page=${page}&limit=${limit}`, {
    method: "GET",
    headers: new Headers({
      [APP_ID_FIELD]: APP_ID_VALUE,
    }),
  }).then((response) => response.json())
    .then((response: UsersListResponse) => callback(response.data))
    .catch(errorCallback);