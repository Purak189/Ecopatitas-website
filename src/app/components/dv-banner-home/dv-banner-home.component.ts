import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";
import { OpenModalService } from '../../shared/OpenModal.service';

@Component({
	selector: 'app-dv-banner-home',
	templateUrl: './dv-banner-home.component.html',
	styleUrls: ['./dv-banner-home.component.scss']
})
export class DvBannerHomeComponent {
	currentSlide = 0;
	slides = [0, 1, 2, 3]; // cantidad de imágenes que tienes
	interval: any;

	ngOnInit() {
		this.interval = setInterval(() => {
			this.currentSlide = (this.currentSlide + 1) % this.slides.length;
		}, 5000); // cambia cada 5 segundos
	}

	ngOnDestroy() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}
}
