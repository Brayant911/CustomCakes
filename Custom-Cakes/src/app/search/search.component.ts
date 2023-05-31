import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
 searchText : string = "";
  @Output()
 searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

constructor() {}
 ngOnInit(): void {}

 searchNote() {
  this.searchTextChanged.emit(this.searchText);
}

// reset() {
//   this.searchText = "";
//   this.searchTextChanged.emit(this.searchText);
// }
}