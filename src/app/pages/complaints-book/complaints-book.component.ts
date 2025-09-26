import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EngineSDK } from '@dilvant/engine-sdk';
import { productsList, servicesList } from '../../constants/ProductsList';
import { Confirmation } from '../../constants/confirmation';
import { Notification } from '../../constants/notification';

@Component({
	selector: 'app-complaints-book',
	templateUrl: './complaints-book.component.html',
	styleUrls: ['./complaints-book.component.scss']
})
export class ComplaintsBookComponent {
	products = productsList;
  services = servicesList;

	showNotification = false;
	formulario: FormGroup;
  selectedType: string = 'Producto';

	constructor(private formBuilder: FormBuilder) {

		window.scrollTo(0, 0);

		this.formulario = this.formBuilder.group({
			fecha: ['', Validators.required],
			nombres: ['', Validators.required],
			tipoDocumento: ['', Validators.required],
			documento: ['', Validators.required],
			distrito: ['', Validators.required],
			domicilio: ['', Validators.required],
			telefono: ['', Validators.required],
			correo: ['', [Validators.required, Validators.email]],
			producto: ['', Validators.required],
			monto: ['', Validators.required],
			descripcion: ['', Validators.required],
			tipo: ['', Validators.required],
			detalle: ['', Validators.required],
			pedido: ['', Validators.required]
		});
	}

	onSubmit() {
		if (this.formulario.invalid) {
			return;
		}

		this.newReclamacion(this.formulario.value);
		this.confimationReclamacion(this.formulario.value);

		this.showNotification = true;

		setTimeout(() => {
			this.showNotification = false;
		}, 5000);

		this.formulario.reset();
	}

	async newReclamacion(client: any = {}) {

		const receivers = {
			name: "Josle Sportswear",
			email: "josle.produccion@outlook.com",

		};

		client.fechaActual = new Date().toLocaleDateString('es-PE', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '/');


		const emailBody = {
			subject: '¡Auch! Tenemos una nueva reclamación',
			receivers,
			content: {
				type: 'text/html',
				value: Notification(client)
			},
			sender: {
				name: client.nombres,
				email: 'noreply@dilvant.com',
			},
		};

		await EngineSDK.Email.send(emailBody);
	}

	async confimationReclamacion(client: any = {}) {

		const receivers = {
			//email: 'Josle.produccion@outlook.com',
			//name: 'Administración Dilvant',

			name: client.nombres,
			email: client.correo,
		};

		client.fechaActual = new Date().toLocaleDateString('es-PE', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '/');


		const emailBody = {
			subject: '¡Confirmación de reclamación!',
			receivers,
			content: {
				type: 'text/html',
				value: Confirmation(client),
			},
			sender: {
				name: "Josle Sportswear",
				email: "noreply@dilvant.com",
			},
		};

		await EngineSDK.Email.send(emailBody);
	}
}
