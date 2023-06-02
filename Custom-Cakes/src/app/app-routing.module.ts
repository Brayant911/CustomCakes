import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {
    path: 'notes', component: DashboardComponent,
  },
  {
    path: '', redirectTo: "notes", pathMatch: 'full'
  },
  {
    path: "notes/:id/edit", component: NoteEditComponent,
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

// const routes: Routes = [
//   {path: 'NoteViewComponent' , component: NoteViewComponent},
//   {path: 'NoteEditComponent' , component: NoteEditComponent},
// ];

