import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Example } from '../../models/example';

@Injectable({
  providedIn: 'root'
})
export class ExamplesService {

  private examplesURL = environment.api.endpoints.examples;

  constructor(private http: HttpClient) { }

  getExamples(): Observable<Example[]> {
    return this.http.get<Example[]>(this.examplesURL);
  }
}
