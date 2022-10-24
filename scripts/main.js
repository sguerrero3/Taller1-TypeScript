import { series } from './data.js';
var seriesTable = document.getElementById("series-Table");
mostrarSeries(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var average = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"table-active\">".concat(serie.index, "</td>\n                               <td class=\"table-active\"><a href=\"").concat(serie.watch, "\" target=\"_blank\">").concat(serie.name, "</a> </td>\n                               <td class=\"table-active\">").concat(serie.channel, "</td>\n                               <td class=\"table-active\">").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        average += serie.seasons;
    }
    var trAverage = document.createElement("tr");
    trAverage.innerHTML = "<td colspan=\"4\">Season average: ".concat(average / series.length, "</td>");
    seriesTbody.appendChild(trAverage);
    seriesTable.appendChild(seriesTbody);
}
