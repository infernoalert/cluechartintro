import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DiagramIndexItem {
  title: string;
  file: string;
}

export interface Diagram {
  id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiagramService {
  private readonly dataPath = 'assets/data/';

  constructor(private http: HttpClient) { }

  getDiagramIndex(): Observable<DiagramIndexItem[]> {
    return this.http.get<DiagramIndexItem[]>(`${this.dataPath}index.json`);
  }

  getDiagram(fileName: string): Observable<Diagram> {
    return this.http.get<Diagram>(`${this.dataPath}${fileName}`);
  }
}
