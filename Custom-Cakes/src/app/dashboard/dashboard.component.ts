import { Component ,Input ,OnInit,} from '@angular/core';
import { Cake} from '../models/cake';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  @Input() 
  cake? : Cake
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
  