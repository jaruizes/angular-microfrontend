import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message) {
    if (!environment.production) {
      console.log(`[${environment.config.name}] ${message}`);
    }
  }
}
