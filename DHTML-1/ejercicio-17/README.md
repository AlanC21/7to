Se tiene una tabla y dos controles de tipo button. Permitir inicializar con 5 la propiedad border de la tabla al presionar uno de los botones y borrar la propiedad border al presionar el otro botón.
El archivo pagina1.html es el siguiente:
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba</title>
</head>

<body>
    <table id="tabla1">
        <tr>
            <td>11</td>
            <td>12</td>
        </tr>
        <tr>
            <td>21</td>
            <td>22</td>
        </tr>
    </table>
    <input type="button" value="Inicializar borde" onClick="definirAtributo()">
    <input type="button" value="Borrar borde" onClick="borrarAtributo()">
    <script src="funciones.js"></script>
</body>

</html>