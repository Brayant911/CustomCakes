import { Component, Input, OnInit} from '@angular/core';
import { Note } from '../models/note';
// import { NOTES } from '../models/notes';
import { NoteService } from '../../services/note.service';


@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css'],
})

export class NoteViewComponent implements OnInit {
notes : Note[] = [];
addNote: boolean = false;
constructor(private noteService: NoteService) { }

ngOnInit() : void {
  this.noteService.getNotes(). subscribe({
    next: data => {
      this.notes = data;
    },
    error: e => {
      alert("Failed to Fetch Notes Due to Server Error !!");
    }
  });
}

onSearchTextChanged(searchText: string) {
  this.noteService.getNotes().subscribe({
    next: data => {
      if (searchText !== "")
        this.notes = data.filter(note => note?.title?.includes(searchText));
}
  })
}}