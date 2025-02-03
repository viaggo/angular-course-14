import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso14_16';

  constructor(){
    const auxmap =  [1,2,3,4,5,6].map( n => {
      return n * 2;
    })

    console.log("datos del map", auxmap);


    const auxmap2 = [1,2,3,4,5,6,7,8,9].forEach(n => {
      console.log("for "+ n);
    })

    const auxfind = [1,2,3,4,5,6,7,8,9].find( n => n ===3);
    console.log(auxfind);

    const auxFindindex = [1,2,3,4,5].findIndex(n => n ===2);
    console.log("index: " + auxFindindex);

    const auxIndexof = [1,2,3,4,5].indexOf(1);
    console.log ("encontrado:" + auxIndexof);

    const auxIndexofChar = "El amor es infinito".indexOf("infinito");
    console.log ("auxIndexofChar:" + auxIndexofChar);

    const auxFilter = [1,2,3,4,5,6,7,8,9].filter(n => n > 5);
    console.log("numero mayor que 5: " + auxFilter);

    const auxJoin = [1,2,3,4,5].join("-");
    console.log("join " + auxJoin);

    const auxSplit ="La vida es importante".split(' ');
    console.log("posicion 1 " + auxSplit[1] )
  }

  getName(name: string) : string {
    return "Bienvenido" + name;
  }

  private (num: number):number {
    return num * 5;
  }
}
