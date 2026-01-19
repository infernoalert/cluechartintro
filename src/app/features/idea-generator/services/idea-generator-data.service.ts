import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaGeneratorDataService {
  private readonly basePath = 'config/';

  constructor(private http: HttpClient) {}

  getWhoList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.basePath}who.json`);
  }

  getWhyList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.basePath}why.json`);
  }

  getWhatList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.basePath}what.json`);
  }
}
