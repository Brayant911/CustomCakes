import { Component, Output, Input } from '@angular/core';
import { Cake} from '../models/cake';

@Component({
  selector: 'app-cake-note',
  templateUrl: './cake-note.component.html',
  styleUrls: ['./cake-note.component.css']
})
export class CakeNoteComponent {

  @Input() 
  cake? : Cake;

  // @Output()
  // noteDeleted: EventEmitter<number> =  new EventEmitter<number>(false)
  actionsDisplayed:boolean=false;
  
  constructor() {}
  
  displayActions() {
    console.log("displayActions");
  this.actionsDisplayed= true;
  }
  
  hideActions() {
    console.log("Actionshidden");
  this.actionsDisplayed= false;
  }

}
