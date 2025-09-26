import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from "rxjs";
import { OpenModalService } from '../../shared/OpenModal.service';

@Component({
	selector: 'app-dv-navbar',
	templateUrl: './dv-navbar.component.html',
	styleUrls: ['./dv-navbar.component.scss']
})
export class DvNavbarComponent {

	isProductsPage: boolean = false;
	isScrolled: boolean = false;
	isVisible: boolean = false

	constructor(private _router: Router,
		private _openModalService: OpenModalService
	) {
	}

	ngOnInit(): void {
		const validRoutes = ['/nuestros-productos', '/libro-reclamaciones'];

		this.isProductsPage = validRoutes.some(route => this._router.url.startsWith(route));

		this._router.events
			.pipe(
				filter((event): event is NavigationEnd => event instanceof NavigationEnd)
			)
			.subscribe((event: NavigationEnd) => {
				this.isProductsPage = validRoutes.some(route => event.urlAfterRedirects.startsWith(route));
			});
	}


	toggleMenu() {
		const menu = document.querySelector('.dv-navbar__menu-mobile-container');
		if (menu) {
			menu.classList.toggle('active');
		}
	}

	navigateTo(url: string) {
		this._router.navigate([url]);
	}

	navigateToSection(section: string) {

		this._router.navigate([`/`]);

		setTimeout(() => {
			const el = document.getElementById(section);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);
	}

  navigateToUrl(url: string) {
    window.open(url, '_blank');
  }

	ngAfterViewInit(): void {
		const banner = document.querySelector('.dv-banner-container');

		if (banner) {
			const observer = new IntersectionObserver(
				([entry]) => {
					this.isScrolled = !entry.isIntersecting;
				},
				{ threshold: 0.99 }
			);

			observer.observe(banner);
		}
	}

	openModal() {
		this._openModalService.openModal();
	}


	@ViewChild('banner', { static: false }) bannerElement!: ElementRef;
}
