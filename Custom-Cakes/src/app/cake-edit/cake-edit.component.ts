import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { Cake} from '../models/cake';
// import { NOTES } from '../models/notes';
import { CakeService } from 'src/services/cakes.service';
import { ActivatedRoute } from '@angular/router';
import { CakeRouterService } from '../../services/cakes-router.service';


@Component({
  selector: 'app-cake-edit',
  templateUrl: './cake-edit.component.html',
  styleUrls: ['./cake-edit.component.css']
})
export class CakeEditComponent implements OnInit{
  cake: Cake= {};
  constructor(private activatedRoute: ActivatedRoute,
    private cakeService: CakeService,
    private CakeRouterService: CakeRouterService) { 
}


ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(param => {
  let id = param.get('id') ?? 0;
      this.cakeService.getNote(+id).subscribe(data => {
          this.cake = data;
      });
  });
}

saveNote(): void {
  this.cakeService
  .editNote(this.cake.id??0,this.cake)
  .subscribe((cake)=>{
    this.CakeRouterService.navigateToOrderView()

  });
} 
}
