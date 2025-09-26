export function Report(client: any) {
  return `<body style="background-color: #FFFFFF;">
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
src="https://objects-us-east-1.dream.io/augurdigital/josle/title-3.png" alt="title" />
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
Buen día,
</h1>

<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
Se ha recibido una nueva solicitud de informe mediante la web:
</p>


<h1 style=" font-size: 20px; font-style: normal; font-weight: bold; line-height: 150%; ">
Correo del cliente:
</h1>

<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
<b>Correo Electrónico:</b> ${client.correo}</b>
</p>

<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
Comunicarse con el cliente y brindar la información correspondiente.
</p>

<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
Muchas gracias.
</p>

<p style="font-size: 14px; font-style: normal; font-weight: 300; line-height: 150%">
Saludos,
</p>

<p style="font-size: 14px; font-style: italic; font-weight: 600; line-height: 150%">
F & P E.I.R.L..
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
<img src="https://objects-us-east-1.dream.io/augurdigital/josle/logo.png" alt="logo">
</div>

</td>
</tr>
</table>
</body>`;
}

