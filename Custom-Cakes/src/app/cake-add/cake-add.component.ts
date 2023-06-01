 import { Component, EventEmitter,OnInit, Output } from '@angular/core';
 import { Cake} from '../models/cake';
 import { CakeService } from 'src/services/cakes.service';

 
 @Component({
  selector: 'app-cake-add',
  templateUrl: './cake-add.component.html',
   styleUrls: ['./cake-add.component.css']
 })
 export class CakeAddComponent {
   cake : Cake = {
   }; 
  @Output()
  noteAdded: EventEmitter<Cake> = new EventEmitter<Cake>();
  
  constructor (private cakeService: CakeService) { }

  cakeAdd() {
     console.log(this.cake);
     if (this.cake.title !== '') {
      this.cakeService.noteAdd(this.cake).subscribe({
         next: (data) => {
          alert("Note Added" )
          this.noteAdded.emit(this.cake);
          this.cake = {};
       },
        error: (e) => {
           alert('Failed to Add Note Due to Server Error !!');
      },
       });
   }
 }
 }
