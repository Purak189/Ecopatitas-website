import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {ComplaintsBookComponent} from "./complaints-book/complaints-book.component";

const routes: Routes = [
	{
		path: '', component: HomeComponent
	},
  {
    path: 'libro-reclamaciones', component: ComplaintsBookComponent
  }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
