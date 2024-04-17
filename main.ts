import { Serie } from "./serie";
import { series } from "./data";

function mostrarSeriesEnTabla() {   //Mostrar las series en la tabla HTML
    const tabla = document.getElementById("tabla-series") as HTMLTableElement;
    const sumaSeasons = document.getElementById("sumSeasons") as HTMLTableElement;
    
    let totalSeasons = 0; //Para almacenar la suma de las temporadas
    series.forEach(function (serie) {
        const fila = tabla.insertRow();
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

    var promSeasons = totalSeasons/(series.length);
    sumaSeasons.textContent = "Seasons average: " + promSeasons.toString();
}

function findSerieById(serieId: number): Serie | undefined {        //Buscar serie por su Id
    for (const serie of series) {
        if (serie.id === serieId) {
            return serie;
        }
    }
    return undefined; // Si no se encuentra la serie
}

function mostrarDetalleSerie(event: MouseEvent) {               //Mostrar el detalle de la serie seleccionada
    const fila = event.currentTarget as HTMLTableRowElement;    // Obtener la fila clickeada
    const serieIdString = fila.dataset.id;                      // Obtener el ID de la serie como string
    
    if (serieIdString) {
        const serieId = parseInt(serieIdString); //Se Convierte el Id de la serie a número
        
        const serie = findSerieById(serieId);   //Buscamos la serie en la lista de series
        
        if (serie) {        //Si la serie existe
            const detalleSerie = document.getElementById("detalle-serie") as HTMLTableElement;
            detalleSerie.innerHTML = "\n                <div class=\"card-body\">\n                    <img src=\"".concat(serie.url_img, "\" id=\"imgLogo\"  class=\"img-fluid\" style=\"padding: 0 !important; margin: 0 !important; width: 100%;\">                    \n<h5 class=\"card-title\">").concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.descripcion, "</p>\n                    <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n                </div>\n            ");
        }
    }
}

window.onload = mostrarSeriesEnTabla;