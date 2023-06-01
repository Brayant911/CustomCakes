import { Component } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../../services/cakes.service';


@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent {
  notes : Cake[] = []; 
  addNote: boolean = false;
  constructor(private cakeService: CakeService) { }
  
  ngOnInit() : void {
    this.cakeService.getNotes(). subscribe({
      next: data => {
        this.notes = data;
      },
      error: e => {
        alert("Failed to Fetch Notes Due to Server Error !!");
      }
    });
  }
  
  onSearchTextChanged(searchText: string) {
    this.cakeService.getNotes().subscribe({
      next: data => {
        if (searchText !== "")
          this.notes = data.filter(cake => cake?.title?.includes(searchText));
  }
    })
  }
}
