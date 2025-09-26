import { Component } from '@angular/core';
import { OpenModalService } from '../../shared/OpenModal.service';

declare var $: any;

@Component({
	selector: 'app-dv-banner-cards',
	templateUrl: './dv-banner-cards.component.html',
	styleUrls: ['./dv-banner-cards.component.scss']
})
export class DvBannerCardsComponent {
	cards = [
		{
			img: './../../../assets/banner/banner-us-card-1.png',
			title: 'Responsabilidad',
      description: 'Compromiso hacia el planeta y la comunidad.'
		},
		{
			img: './../../../assets/banner/banner-us-card-2.png',
			title: 'Innovación',
      description: 'Optimizamos los procesos de reciclajes.'
		},
		{
			img: './../../../assets/banner/banner-us-card-3.png',
			title: 'Transparencia',
      description: 'Operamos con claridad y honestidad'
		},

	];


	constructor(
		private _openModalService: OpenModalService
	) { }


	openModal() {
		this._openModalService.openModal();
	}

  ngAfterViewInit() {
    const slider = $('.slider-banner');

    slider.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      dots: false,
      responsive:[
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            dots: true,
            centerMode: true,
            autoplay: false,
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            vertical: false,
            autoplay: false,
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

  }
}
