import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../app/models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  URL: string = "http://localhost:3000/cakes";
  constructor(private http: HttpClient) {}


getNotes(): Observable<Array<Note>> {
  return this.http.get<Array<Note>>(this.URL);
}

noteAdd(note : Note):Observable<Note> {
  return this.http.post<Note>(this.URL, note);
}

getNote(noteId: number) : Observable<Note> {
  return this.http.get<Note>(`${this.URL}/${noteId}`);
}

editNote(noteId: number, note: Note):Observable<Note> {
  return this.http.put<Note>(`${this.URL}/${noteId}`,note);
}


deleteNote(noteId : number):Observable<Note> {
  return this.http.delete<Note>(`${this.URL}/${noteId}`);
}

}

