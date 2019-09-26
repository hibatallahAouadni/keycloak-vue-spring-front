import ApiService from './ApiService';
import UserEntity from '@/models/UserEntity';
import ApiResponse from '@/models/ApiResponse';

export default class UserService extends ApiService {

  public public(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.get('/public')
        .then((response: ApiResponse) => resolve(response.content))
        .catch(reject);
    });
  }

  public private(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.get('/private')
        .then((response: ApiResponse) => resolve(response.content))
        .catch(reject);
    });
  }

  public user(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.get('/user')
        .then((response: ApiResponse) => resolve(response.content))
        .catch(reject);
    });
  }

  public admin(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.get('/admin')
        .then((response: ApiResponse) => resolve(response.content))
        .catch(reject);
    });
  }

  public login(): Promise<UserEntity> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
