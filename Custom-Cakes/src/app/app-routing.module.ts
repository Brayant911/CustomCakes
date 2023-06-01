import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { OrderViewComponent } from './order-view/order-view.component';
import { CakeEditComponent } from './cake-edit/cake-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'notes', component: DashboardComponent,
  },
  {
    path: '', redirectTo: "notes", pathMatch: 'full'
  },
  {
    path: "notes/:id/edit", component: CakeEditComponent,
  },
  {
    path: "**", component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
