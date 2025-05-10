const connect_templates = {
  selecciondegrupo: function selecciondegrupo(name, lastname){
    return `
    <!DOCTYPE html>
      <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Se ha registrado una persona</title>
        </head>
        <body style="font-family: Arial, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2>Verificación de Correo Electrónico</h2>
                <p>Estimado/a ${name} ${lastname},</p>
                <p>Gracias por registrarte en nuestro servicio
            </div>
        </body>
    </html>
  `}
};

module.exports = connect_templates;