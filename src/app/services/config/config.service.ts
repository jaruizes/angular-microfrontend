import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configData;

  constructor(private http: HttpClient) {}

  load() :Promise<any>  {
    const promise = this.http.get(environment.api.endpoints.config)
      .toPromise()
      .then(data => {
        this.configData = data;
        return data;
      });

    return promise;
  }

  get(property: string) {
    return this.configData[property];
  }

  getMicrofrontendURL(mf: string) {
    return this.configData['microfrontends'][mf];
  }

  getWebComponentURL(wc: string) {
    return this.configData['webcomponents'][wc];
  }
}
