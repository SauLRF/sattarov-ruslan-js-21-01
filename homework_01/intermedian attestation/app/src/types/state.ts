import { CommentType } from './api/dumMyApiResponses';

export interface State {
  list: ListState;
  comments: CommentsState
}

export interface ListState {
  records: Array<string>;
}

export interface CommentsState {
  commentsList: Array<CommentType>
  loading: boolean
}

export interface PostsState {
  PostList: Array<CommentType>
  loading: boolean,
  error:string;
}
export interface UsersState {
  UserList: Array<CommentType>
  loading: boolean,
  error:string;
}