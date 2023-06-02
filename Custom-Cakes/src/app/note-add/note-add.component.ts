import { Component, EventEmitter,OnInit, Output } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { Note} from '../models/note';
import { NoteService } from 'src/services/note.service';

// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent {
  note : Note = {}; 
  @Output()
  noteAdded: EventEmitter<Note> = new EventEmitter<Note>();
  
  constructor (private noteService: NoteService) { }

  noteAdd() {
    console.log(this.note);
    if (this.note.title !== '') {
      this.noteService.noteAdd(this.note).subscribe({
        next: (data) => {
          alert("Note Added" )
          this.noteAdded.emit(this.note);
          this.note = {};
        },
        error: (e) => {
          alert('Failed to Add Note Due to Server Error !!');
      },
      });
  }
}
}

