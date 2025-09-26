import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import {ComplaintBookComponent} from "./complaint-book/complaint-book.component";

const routes: Routes = [
	{
		path: '', component: HomeComponent
	},
  {
    path: 'libro-reclamaciones', component: ComplaintBookComponent
  }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
