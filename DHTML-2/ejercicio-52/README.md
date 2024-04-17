Se tiene una página que contiene dos tablas html que muestran los sueldos promedio de tres empleados durante los años 2020 y 2021:
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba</title>
    <link rel="stylesheet" href="estilos.css">
</head>

<body>
    <h1>Año 2020</h1>
    <table class="tablasueldos" id="a2020">
        <tr>
            <td>Empleado</td>
            <td>Sueldo</td>
        </tr>
        <tr>
            <td>juan</td>
            <td>1200</td>
        </tr>
        <tr>
            <td>ana</td>
            <td>1900</td>
        </tr>
        <tr>
            <td>luis</td>
            <td>1500</td>
        </tr>
    </table>

    <h1>Año 2021</h1>
    <table class="tablasueldos" id="a2021">
        <tr>
            <td>Empleado</td>
            <td>Sueldo</td>
        </tr>
        <tr>
            <td>juan</td>
            <td>1700</td>
        </tr>
        <tr>
            <td>ana</td>
            <td>1900</td>
        </tr>
        <tr>
            <td>luis</td>
            <td>1900</td>
        </tr>
    </table>

    <input type="button" value="Cambiar" id="boton1">
    <script src="funciones.js"></script>
</body>

</html>
Desarrolar un programa que recupere mediante el método querySelectorAll los elementos "td" de una de las tablas y les cambie el color de fondo. Lo mismo hacer para la segunda tabla.