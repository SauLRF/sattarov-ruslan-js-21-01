export interface ListResponseType<T> {
    data: Array<T>;
    total: number;
    page: number;
    limit: number;
  }
  
  export interface OwnerType {
    firstName?: string;
    lastName?: string;
    id?: string;
    picture?: string;
  }
  
  export interface CommentType {
    id?: string;
    message?: string;
    post?: string;
    publishDate?: string;
    owner?: OwnerType;
  }
  
  export interface UserResponse {
    id?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    dateOfBirth?: string;
    registerDate?: string;
    phone?: string;
    picture?: string;
  }
  

  export interface UserType {
    id?:string;
    title?:string;
    firstName?:string;
    lastName?:string;
    picture?:string;
  }
  export interface ResponseError {
    error: string; }

  export interface PostType{
      id?: string;
      text?: string;
      image?: string;
      likes?: number;
      link?: string;
      tags?: string;
      publishDate?: string;
      owner?: OwnerType;
    }