import {Component, HostListener} from '@angular/core';
import { OpenModalService } from '../../shared/OpenModal.service';

declare const $: any;

@Component({
	selector: 'app-dv-about-us',
	templateUrl: './dv-about-us.component.html',
	styleUrls: ['./dv-about-us.component.scss']
})
export class DvAboutUsComponent {
  imageSrc: string = './assets/about-us/about-us.png';

	constructor(private _openModalService: OpenModalService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateImageSrc(window.innerWidth);
  }

  private updateImageSrc(width: number): void {
    this.imageSrc = width <= 1450
      ? './assets/about-us/about-us.png'
      : './assets/about-us/about-us.png';
  }

  ngOnInit(): void {
    this.updateImageSrc(window.innerWidth);
  }

	ngAfterViewInit(): void {

		$('.slider-about-us').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000,
			dots: false,
		});
	}

	prevSlide() {
		$('.slider-about-us').slick('slickPrev');
	}

	nextSlide() {
		$('.slider-about-us').slick('slickNext');
	}

	openModal() {
		this._openModalService.openModal();
	}
}
