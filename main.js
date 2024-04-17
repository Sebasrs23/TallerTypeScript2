"use strict";
import {series} from './data.js';
function mostrarSeriesEnTabla() {
    var tabla = document.getElementById("tabla-series");
    var sumaSeasons = document.getElementById("sumSeasons");
    var totalSeasons = 0; //Para almacenar la suma de las temporadas
    series.forEach(function (serie) {
        var fila = tabla.insertRow();
        fila.dataset.id = serie.id.toString();
        fila.addEventListener('click', mostrarDetalleSerie); //Evento clic a la fila (escuchador)
        var idCell = fila.insertCell();
        var nameCell = fila.insertCell();
        var channelCell = fila.insertCell();
        var seasonsCell = fila.insertCell();
        idCell.textContent = serie.id.toString();
        var link = document.createElement("a"); //Enlace <a> dentro de nameCell
        link.href = "#";
        link.textContent = serie.name;
        nameCell.appendChild(link);
        channelCell.textContent = serie.channel;
        seasonsCell.textContent = serie.seasons.toString();
        totalSeasons += serie.seasons;
    });
    var promSeasons = totalSeasons / (series.length);
    sumaSeasons.textContent = "Seasons average: " + promSeasons.toString();
}
function findSerieById(serieId) {
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        if (serie.id === serieId) {
            return serie;
        }
    }
    return undefined; // Si no se encuentra la serie
}
function mostrarDetalleSerie(event) {
    var fila = event.currentTarget; // Obtener la fila clickeada
    var serieIdString = fila.dataset.id; // Obtener el ID de la serie como string
    if (serieIdString) {
        var serieId = parseInt(serieIdString); //Se Convierte el Id de la serie a número
        var serie = findSerieById(serieId); //Buscamos la serie en la lista de series
        if (serie) { //Si la serie existe
            var detalleSerie = document.getElementById("detalle-serie");
            detalleSerie.innerHTML = "\n                <div class=\"card-body\">\n                    <img src=\"".concat(serie.url_img, "\" id=\"imgLogo\"  class=\"img-fluid\" style=\"padding: 0 !important; margin: 0 !important; width: 100%;\">                    \n<h5 class=\"card-title\">").concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.descripcion, "</p>\n                    <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n                </div>\n            ");
        }
    }
}
window.onload = mostrarSeriesEnTabla;
