import axios, { AxiosResponse, AxiosRequestConfig} from 'axios';
import { Logger } from './logger';
import { apiConfig } from './api.config';


export abstract class ApiRequest {

  // [x:string]: any;
  protected readonly api;

  constructor() {
    this.api = axios.create(apiConfig);
    this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
      baseUrl: process.env.JSONPLACEHOLDER_BASE_URL,
      ...param
    }));

    this.request = this.request.bind(this);
    this.get = this.get.bind(this);
    // this.delete = this.delete.bind(this);
    // this.head = this.head.bind(this);
    // this.post = this.post.bind(this);
    // this.put = this.put.bind(this);
    // this.patch = this.patch.bind(this);
    Logger.debug(`Instantiated ApiRequest with base url: ${apiConfig.baseURL}`);
  }

  /**
   * Generic request.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<R>} - HTTP axios response payload.
   * @memberof Api
   *
   * @example
   * api.request({
   *   method: "GET|POST|DELETE|PUT|PATCH"
   *   baseUrl: "http://www.domain.com",
   *   url: "/api/v1/users",
   *   headers: {
   *     "Content-Type": "application/json"
   *  }
   * }).then((response: AxiosResponse<User>) => response.data)
   *
   */
  public request<T, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R> {
    return this.api.api.request(config);
  }

    /**
   * HTTP GET method, used to fetch data `statusCode`: 200.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<R>} HTTP `axios` response payload.
   * @memberof Api
   */
  public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.api.get(url, config);
  }

}
