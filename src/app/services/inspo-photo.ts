import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Environments} from '../environments';

@Injectable({
  providedIn: 'root'
})
export class InspoPhoto {
  httpClient: HttpClient = inject(HttpClient);

  getRandomPhoto(){
    return this.httpClient.get(`${Environments.baseUrl}`, {
      params: {
        query: 'inspirational',
        orientation: 'landscape',
        page: 1,
        per_page: 1,
        size: 'large'
      },
      headers: {
        Authorization: Environments.apiKey,
      },
    })
  }
}
