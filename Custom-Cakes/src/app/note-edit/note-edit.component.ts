import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { Note} from '../models/note';
// import { NOTES } from '../models/notes';
import { NoteService } from 'src/services/note.service';
import { ActivatedRoute } from '@angular/router';
import { NoteRouterService } from '../../services/note-router-service';
// import { ImplicitReceiver } from '@angular/compiler';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note: Note= {};
  constructor(private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private NoteRouterService: NoteRouterService) { 
}


ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(param => {
  let id = param.get('id') ?? 0;
      this.noteService.getNote(+id).subscribe(data => {
          this.note = data;
      });
  });
}

saveNote(): void {
  this.noteService
  .editNote(this.note.id??0,this.note)
  .subscribe((note)=>{
    this.NoteRouterService.navigateToNoteView()

  });
}

}
