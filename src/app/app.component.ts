import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso14_16';

  constructor(){
   // https://www.youtube.com/watch?v=PMZaF18pkHg&list=PLkmDVMKx2R1lk_regbIa_6k8TqBOxauit&index=3

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
    console.log("posicion 1 " + auxSplit[1] );

    /***********************************************************************/
    //OPERADOR SPLICE
    const auxSplic = [1,2,3,4,5,6,7,8,9].splice(1,4);
    console.log(auxSplic);  //obtiene los elementos 

   
    //elimina el elemento de un array
    //devuelve lo eliminado y modifica el array original
    const auxSplice = [1,2,3,4,5,6,7,8,9].splice(2,2);
    console.log("elementos splice" + auxSplice);

    //reduce
 
    const auxReduce = [1,2,3,4].reduce((pre,value,i) => {
      return pre + value;
    }, 0)
    console.log(auxReduce);

    //https://www.youtube.com/watch?v=PMZaF18pkHg&list=PLkmDVMKx2R1lk_regbIa_6k8TqBOxauit&index=5
    //min 12

    const auxJson = {
      id: 1,
      name : 'Juan',
      lastname:'Perez'
    };

    const auxEntries = Object.entries(auxJson);
    console.log("auxEntries: " + auxEntries);

    const aunkeys = Object.keys(auxJson);
    console.log("aunkesy: " + aunkeys);

    const aunValues = Object.values (auxJson);
    console.log("aunJson: " + aunValues);

    //typescript
    let miVar : number = 20;
    let miDato : String = 'Este es mi información';

    for (let i = 1; i <= 5; i++) {
      console.log('index : ' + i);
    }

    //spread operator, Rest oprator
    //spread operator  (...)
    let a = [1,2,3,4,5];
    let b = [...a, 6,7,6,8];

    console.log("Spread operator: a " + a);
    console.log("Spread operator: a.. + b " + b);

    this.getRest('uno','dos','tres')


    //destructuracion
    const person = {
      id : 1,
      name : 'Juan',
      country : {
        idCountry : 1,
        cod : 'LP'
      }
    }

    const {country, id} = person;
    console.log('country: ' + country);


    //ejercicio

    const data = {
      0: { id:1, name : 'Pedro', age: 20 },
      1: { id:2, name : 'Julio', age: 25 }
    }

    //transforma a un array de objeto
    let arrayInfo = Object.values(data);

    arrayInfo.reduce((prev,value) => {
      if (value.age> 20) {
        return prev + value.age;
      }
      return prev;
    }, 0 );

    let mayores = arrayInfo.filter(p => p.age > 20).map(p => p.id)  ;
    console.log(mayores);
    
  }

  getRest(...param: string[]) {
    for(let d in param) {
      console.log('valores: ' + d);
    }
  }

  getName(name: string) : string {
    return "Bienvenido" + name;
  }

  private (num: number):number {
    return num * 5;
  }
}
