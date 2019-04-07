import HeroesEntity from '@/models/HeroesEntity';
import ApiService from './ApiService';
import ApiResponse from '@/models/ApiResponse';

export default class HeroesService extends ApiService {

  public getAll(): Promise<HeroesEntity[]> {
    return new Promise((resolve, reject) => {
      this.get('/api/heroes')
        .then((res: ApiResponse) => resolve(res.content))
        .catch(reject);
    });
  }

}
