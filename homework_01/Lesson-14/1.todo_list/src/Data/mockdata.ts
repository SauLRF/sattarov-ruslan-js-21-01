interface CommonResponse {
    status: 'ok' | 'error';
  }
  
  export interface listResponse extends CommonResponse {
    result: Array<listType>;
  }
  
  export interface listType {
    id?: number;
    text?: any;
    finished:boolean;
  }

export const InworkResponse: listResponse = {
    status: 'ok',
    result: [
    ],
  };
