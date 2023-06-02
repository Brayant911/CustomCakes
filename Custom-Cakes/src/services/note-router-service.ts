import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoteRouterService {

  constructor(private router: Router) { }

  navigateToNoteView() {
    this.router.navigate([""]);
}

}
