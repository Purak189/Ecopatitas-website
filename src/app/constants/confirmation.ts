export function Confirmation(client: any) {
	return `
  <body style="background-color: #FFFFFF;">
	<table style="
				margin: 0 auto;
				height: 110px;
				min-width: 640px;
			">
		<tbody>

			<tr>
				<td align="center">
					<a target="_blank" rel="noopener noreferrer" href="https://dilvant.com/">
						<img style="max-width: 640px; margin-top: 25px;"
							src="https://objects-us-east-1.dream.io/augurdigital/josle/title-1.png" alt="title" />
					</a>
				</td>

			</tr>
		</tbody>
	</table>
	<table style="
				margin: 0 auto;
				width: 640px;
			">
		<tbody>
			<tr>
				<td>
					<div style="
								padding: 30px;
								background: #fff;
								margin: auto 0;
								border-radius: 8px;
								text-align: center;
								font-family: 'Outfit', sans-serif;
								line-height: 30px;
							">
						<div style="text-align: left">

							<h1 style=" font-size: 20px; font-style: normal; font-weight: bold; line-height: 150%; ">
								Datos del consumidor
							</h1>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								Hola, ${client.nombres}.
							</p>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								Se ha recibido su Reclamación. A continuación, se detallan los datos:
							</p>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Fecha de Reclamo:</b> ${client.fechaActual}</b>
							</p>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Nombre y Apellido: </b> ${client.nombres}</b>
							</p>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Tipo de Documento:</b> ${client.tipoDocumento}</b>
							</p>
							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Documento:</b> ${client.documento}</b>
							</p>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Distrito:</b> ${client.distrito}</b>
							</p>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Domicilio:</b> ${client.domicilio}</b>
							</p>
							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Teléfono:</b> ${client.telefono}</b>
							</p>
							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Correo:</b> ${client.correo}</b>
							</p>

							<h1 style=" font-size: 20px; font-style: normal; font-weight: bold; line-height: 150%; ">
								Identificación del bien Contratado
							</h1>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%"></p>
							<b>Producto de Reclamo :</b> ${client.producto}</b>
							</p>
							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%"></p>
							<b>Monto de reclamo :</b> ${client.monto}</b>
							</p>
							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%"></p>
							<b> Descripción:</b> ${client.descripcion}</b>
							</p>


							<h1 style=" font-size: 20px; font-style: normal; font-weight: bold; line-height: 150%; ">
								Detalle de la reclamación y pedido del consumidor
							</h1>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Queja o Reclamo:</b> ${client.tipo}</b>
							</p>
							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Detalle:</b> ${client.detalle}</b>
							</p>
							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								<b>Pedido:</b> ${client.pedido}</b>
							</p>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								Revisaremos el reclamo/queja durante los siguientes días y nos comunicaremos con usted.
							</p>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
								Muchas gracias.</p>

							<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">

								<b style="font-style: italic;"> Saludos, F & P E.I.R.L.</b>
							</p>



							<br />
						</div>
					</div>
				</td>
			</tr>
		</tbody>
	</table>

	<div style="width: 630px; height: 2px; background-color: #FE0AB7; align-items: center; margin: 20px auto;"></div>

	</div>

	<table style="
				margin: 0 auto;
				min-width: 640px;
				height: 110px;
			">
		<tr>
			<td style="text-align: center">

				<p
					style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%;     font-family: 'Outfit', sans-serif;">
					Contáctanos</p>

					<div style="margin-bottom: 10px">
					<a target="_blank" rel="noopener noreferrer" href="mailto:mail@example.com"
						style="text-decoration: none">
						<img src="https://objects-us-east-1.dream.io/augurdigital/josle/icon-mail.png" alt="facebook"
							style="margin: 0 9px" />
					</a>

					<a target="_blank" rel="noopener noreferrer" href="https://wa.me/51951950351"
						style="text-decoration: none">
						<img src="https://objects-us-east-1.dream.io/augurdigital/josle/icon-ws.png"
							style="margin: 0 9px" alt="instagram" />
					</a>

					<a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/suYt3tFPkQPHC4Qi6"
						style="text-decoration: none">
						<img src="https://objects-us-east-1.dream.io/augurdigital/josle/icon-dot.png"
							style="margin: 0 9px" alt="instagram" />
					</a>

				</div>

				<div style="margin: 20px 0">
					<img src="https://objects-us-east-1.dream.io/augurdigital/josle/logo.png" alt="pando">
				</div>
			</td>
		</tr>
	</table>
</body>`;
}

