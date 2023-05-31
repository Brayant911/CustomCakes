import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cake } from '../models/cake';
@Injectable({
  providedIn: 'root'
})
export class CakeService {
  URL: string = "http://localhost:3000/notes";
  constructor(private http: HttpClient) {}


getNotes(): Observable<Array<Cake>> {
  return this.http.get<Array<Cake>>(this.URL);
}

// noteAdd(note : Note):Observable<Note> {
//   return this.http.post<Note>(this.URL, note);
// }

// getNote(noteId: number) : Observable<Note> {
//   return this.http.get<Note>(`${this.URL}/${noteId}`);
// }

// deleteNote(noteId : number):Observable<Note> {
//   return this.http.delete<Note>(`${this.URL}/${noteId}`);
// }

}