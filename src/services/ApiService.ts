import Vue from 'vue';
import ApiResponse from '@/models/ApiResponse';
import { URL_SERVER } from '@/utils/globals';

export default class ApiService extends Vue {
  protected URL_SERVER: string = URL_SERVER;

  public convertBodyToApiResponse(body: any): ApiResponse {
    try {
      const res = new ApiResponse();
      res.success = body.success;
      res.msg = body.msg;
      res.content = body.content;
      return res;
    } catch (e) {
      return new ApiResponse();
    }
  }

  public convertErrorToApiResponse(err: any): string {
    const res = new ApiResponse();
    try {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return err.response.data;
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return err.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        return err.message;
      }
      } catch (e) {
      return res.msg === null ? 'Unknow error !' : res.msg;
    }
  }

  protected get(route: string, params: any = null): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      return this.axios.get(URL_SERVER + route, params)
        .then((response: any) => {
          resolve(this.convertBodyToApiResponse(response.data));
        }).catch((err: any) => {
          reject(this.convertErrorToApiResponse(err));
        });
    });
  }

  protected post(route: string, params: any = null): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      return this.axios.post(URL_SERVER + route, params)
        .then((response: any) => {
          resolve(this.convertBodyToApiResponse(response.body));
        }).catch((err: any) => {
          reject(this.convertErrorToApiResponse(err));
        });
    });
  }

  protected put(route: string, params: any = null): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      return this.axios.put(URL_SERVER + route, params)
        .then((response: any) => {
          resolve(this.convertBodyToApiResponse(response.body));
        }).catch((err: any) => {
          reject(this.convertErrorToApiResponse(err));
        });
    });
  }

  protected delete(route: string, params: any = null): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      return this.axios.delete(URL_SERVER + route, params)
        .then((response: any) => {
          resolve(this.convertBodyToApiResponse(response.body));
        }).catch((err: any) => {
          reject(this.convertErrorToApiResponse(err));
        });
    });
  }
}
