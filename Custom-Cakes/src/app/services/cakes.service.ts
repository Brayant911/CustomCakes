import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private router: Router) {}
  
  navigateToNoteView() {
    this.router.navigate([""]);
  }
}
