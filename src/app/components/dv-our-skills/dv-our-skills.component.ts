import { Component } from '@angular/core';

@Component({
	selector: 'app-dv-our-skills',
	templateUrl: './dv-our-skills.component.html',
	styleUrls: ['./dv-our-skills.component.scss']
})
export class DvOurSkillsComponent {

	skills = [
		{
			img: './assets/our-skills/our-skill-1.png',
			title: 'Innovación',
		},
		{
			img: './assets/our-skills/our-skill-2.png',
			title: 'Confianza',
		},
		{
			img: './assets/our-skills/our-skill-3.png',
			title: 'Calidad',
		},
		{
			img: './assets/our-skills/our-skill-4.png',
			title: 'Resultados',
		},

	]
}
