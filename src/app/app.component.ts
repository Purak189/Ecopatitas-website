import { Component } from '@angular/core';
import * as Aos from "aos";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'abogados-website';

	isVisible = false;

	ngOnInit(): void {
		Aos.init({
			duration: 1000,
			once: true
		});
	}

}
