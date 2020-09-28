import { ApiRequest } from './api-request';
import { Post } from '../models';
import { AxiosResponse } from 'axios';
import { stringify } from 'querystring';

export class PostService extends ApiRequest {

  private readonly postApi: string;

  constructor() {
    super();
    this.postApi = process.env.JSONPLACEHOLDER_POST_API;
  }

  async getPosts(): Promise<Post> {
    console.log("post api", this.postApi);
    const response: AxiosResponse<Post> = await this.get<Post, AxiosResponse<Post>>(this.postApi);
    const { data } = response;
    return Promise.resolve(data);
  }

}
