import { Component, Input ,OnInit,} from '@angular/core';
import { Note} from '../models/note';



@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
// The `Note` component should declare `note` as input property (using `@Input()` 
// decorator) to receive input from `Note-View` component.
export class NoteComponent {
@Input() 
note? : Note
actionsDisplayed:boolean=false;

constructor() {}

displayActions() {
  console.log("displayActions");
this.actionsDisplayed= true;
}

hideActions() {
  console.log("hideActions");
this.actionsDisplayed= false;
}

}


