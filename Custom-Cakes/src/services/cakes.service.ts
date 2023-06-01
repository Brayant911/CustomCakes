import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cake } from '../app/models/cake';
@Injectable({
  providedIn: 'root'
})
export class CakeService {
  URL: string = "http://localhost:3000/notes";
  constructor(private http: HttpClient) {}


  getNotes(): Observable<Array<Cake>> {
    return this.http.get<Array<Cake>>(this.URL);
  }
  
  noteAdd(note : Cake):Observable<Cake> {
    return this.http.post<Cake>(this.URL, note);
  }
  
  getNote(noteId: number) : Observable<Cake> {
    return this.http.get<Cake>(`${this.URL}/${noteId}`);
  }
  
  editNote(noteId: number, note: Cake):Observable<Cake> {
    return this.http.put<Cake>(`${this.URL}/${noteId}`,note);
  }
  
  
  deleteNote(noteId : number):Observable<Cake> {
    return this.http.delete<Cake>(`${this.URL}/${noteId}`);
  }

}