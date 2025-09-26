import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		HomeComponent,
	],
	imports: [
		CommonModule,
		ComponentsModule,
		PagesRoutingModule,
		ReactiveFormsModule
	]
})
export class PagesModule { }
