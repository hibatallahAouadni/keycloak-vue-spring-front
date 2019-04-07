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
      if (err.status === 0) {
        return 'Server offline';
      }
      return err.body.msg;
    } catch (e) {
      return res.msg === null ? 'Unknow error !' : res.msg;
    }
  }

  protected get(route: string, params: any = null): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      return this.$http.get(URL_SERVER + route, params)
        .then((response: any) => {
          resolve(this.convertBodyToApiResponse(response.body));
        }, (err: any) => {
          reject(this.convertErrorToApiResponse(err));
        });
    });
  }

  protected post(route: string, params: any = null): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      return this.$http.post(URL_SERVER + route, params)
        .then((response: any) => {
          resolve(this.convertBodyToApiResponse(response.body));
        }, (err: any) => {
          reject(this.convertErrorToApiResponse(err));
        });
    });
  }

  protected put(route: string, params: any = null): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      return this.$http.put(URL_SERVER + route, params)
        .then((response: any) => {
          resolve(this.convertBodyToApiResponse(response.body));
        }, (err: any) => {
          reject(this.convertErrorToApiResponse(err));
        });
    });
  }

  protected delete(route: string, params: any = null): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      return this.$http.delete(URL_SERVER + route, params)
        .then((response: any) => {
          resolve(this.convertBodyToApiResponse(response.body));
        }, (err: any) => {
          reject(this.convertErrorToApiResponse(err));
        });
    });
  }
}
