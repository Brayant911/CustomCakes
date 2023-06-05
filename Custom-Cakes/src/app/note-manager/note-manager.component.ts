import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NOTES } from '../models/notes';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-manager',
  templateUrl: './note-manager.component.html',
  styleUrls: ['./note-manager.component.css']
})
export class NoteManagerComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe({
      next: data => {
        this.notes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }

  onNoteAdded(note: Note) {
    this.notes.push(note);
  }

  onSearchTextChanged(noteName: string) {
    this.noteService.getNotes().subscribe({
      next: data => {
        if (noteName || noteName !== '') {
          this.notes = data.filter(note => note.title?.toLowerCase().includes(noteName.toLowerCase()));
        }
        else
          this.notes = data;
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    })
  }
}
