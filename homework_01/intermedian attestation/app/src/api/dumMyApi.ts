export const BASE_URL = 'https://dummyapi.io/data/v1/';
export const POST_URL = 'post';
export const USER_URL = 'user';
export const APP_ID_VALUE = '61900d43125705524880ead2';
export const APP_ID_FIELD = 'app-id';
export const PAGE_FIELD = 'page';
export const LIMIT_FIELD = 'limit';
export const METHOD_GET = 'GET';

  const doGetRequest = (
    path: string,
    searchParams?: Record<string, any>,
  ) => {
    const url = new URL(path, BASE_URL);
    searchParams && Object.entries(searchParams).forEach((params) => {
      url.searchParams.append(params[0], params[1].toString());
    });
    return fetch(url.toString(), {
      method: METHOD_GET,
      headers: new Headers({
        [APP_ID_FIELD]: APP_ID_VALUE,
      }),
    }).then((resp) => resp.json())
      .then((resp) => resp.data);
  };
  export const getUsersList=(
    page:number,
    limit:number,
  )=>doGetRequest(
    "user",
   {
    [PAGE_FIELD]: page,
    [LIMIT_FIELD]: limit,
   }
  )
  export const getPostsList = (
    page: number,
    limit: number,
  ) => doGetRequest(
    "post",
    {
      [PAGE_FIELD]: page,
      [LIMIT_FIELD]: limit,
    },
  );