import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class OpenModalService {

	private modalOpen = new Subject<boolean>();
	modalOpen$ = this.modalOpen.asObservable();

	constructor() { }

	openModal() {
		this.modalOpen.next(true);
	}

	closeModal() {
		this.modalOpen.next(false);
	}
}
