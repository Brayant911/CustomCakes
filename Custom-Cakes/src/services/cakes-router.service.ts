import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CakeRouterService {

  constructor(private router: Router) { }

  navigateToOrderView() {
    this.router.navigate([""]);
}

}