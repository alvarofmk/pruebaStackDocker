import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TutorialResponse } from '../model/tutorial.interface';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  public getAllTutorials(): Observable<TutorialResponse>{
    return this.http.get<TutorialResponse>(`${environment.API_BASE_URL}/tutorials`);
  }

}
