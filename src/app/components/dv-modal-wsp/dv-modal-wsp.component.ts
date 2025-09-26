import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { OpenModalService } from '../../shared/OpenModal.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-dv-modal-wsp',
	templateUrl: './dv-modal-wsp.component.html',
	styleUrls: ['./dv-modal-wsp.component.scss'],
	animations: [
		trigger('slideInOut', [
			state('void', style({
				transform: 'translateY(120px)',
				opacity: 0
			})),
			state('*', style({
				transform: 'translateY(0)',
				opacity: 1
			})),
			transition(':enter', [
				animate('300ms cubic-bezier(0.25, 0.8, 0.25, 1)')
			]),
			transition(':leave', [
				animate('200ms cubic-bezier(0.25, 0.8, 0.25, 1)',
					style({
						transform: 'translateY(120px)',
						opacity: 0
					}))
			])
		])
	]
})
export class DvModalWspComponent {
	phoneNumbers: string[] = ['51 961 291 694', '51 940 762 536'];
	selectedNumber: string = '';
	@Input() isVisible: boolean = false; // Controla visibilidad
	@Input() productName: string = '';
	@Output() onClose = new EventEmitter<void>();
	private subscription!: Subscription;

	constructor(
		private _openModalService: OpenModalService
	) {

	}

	ngOnInit(): void {
		this.subscription = this._openModalService.modalOpen$.subscribe((isOpen: boolean) => {
			this.isVisible = isOpen;
		});
	}


	goToWhatsApp(phoneNumber: string, event?: Event) {
		if (event) {
			event.stopPropagation();
		}

		const phone = phoneNumber.replace(/\s+/g, '');
		window.open(`https://wa.me/${phone}`, '_blank');
		this.closeModal();
	}

	closeModal() {
		this.isVisible = false;
		this.onClose.emit();
	}

	ngOnDestroy(): void {
		// 👇 importante para no dejar múltiples suscripciones vivas
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
}
