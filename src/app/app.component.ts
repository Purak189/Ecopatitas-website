import { Component } from '@angular/core';
import { EngineSDK } from '@dilvant/engine-sdk';
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
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		EngineSDK.setEnv('prod');

		Aos.init({
			duration: 1000,
			once: true
		});
	}

}
