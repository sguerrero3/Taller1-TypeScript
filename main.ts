import {Serie} from './serie.js';
import {series} from './data.js';

let seriesTable:HTMLElement = document.getElementById("series-Table")!;

mostrarSeries(series);

function mostrarSeries(series: Serie[]):void{

    let seriesTbody:HTMLElement = document.createElement("tbody");
    let average:number = 0;
    
    for(let serie of series){

        let trElement:HTMLElement = document.createElement("tr");

        trElement.innerHTML = `<td class="table-active">${serie.index}</td>
                               <td class="table-active"><a href="${serie.watch}" target="_blank">${serie.name}</a> </td>
                               <td class="table-active">${serie.channel}</td>
                               <td class="table-active">${serie.seasons}</td>`;

        seriesTbody.appendChild(trElement);

        average += serie.seasons;
    }

    let trAverage:HTMLElement = document.createElement("tr")
    trAverage.innerHTML = `<td colspan="4">Season average: ${average/series.length}</td>`
    seriesTbody.appendChild(trAverage);
    seriesTable.appendChild(seriesTbody);

    
}


