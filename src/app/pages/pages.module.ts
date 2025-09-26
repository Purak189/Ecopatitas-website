import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComplaintsBookComponent } from './complaints-book/complaints-book.component';

@NgModule({
	declarations: [
		HomeComponent,
    ComplaintsBookComponent,
	],
	imports: [
		CommonModule,
		ComponentsModule,
		PagesRoutingModule,
		ReactiveFormsModule
	]
})
export class PagesModule { }
