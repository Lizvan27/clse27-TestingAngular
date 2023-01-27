import { Component } from '@angular/core';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.css']
})
export class CalcuComponent {
 
  //Primero creamos una variable datos
  operadores!: any;

  n1 = 0;
  n2 = 0;

 
  //aqui el resultado
  resultado!: number;

  //luego creamos una variable para guardar la opcion selecionada
  //contra esta variable vamos con el ngModel
  selected!: string; // Iniciamos

  //cremoa la variable donde lo guardare
  miOpcion: string = '';

  constructor(){
    this.operadores = ['+', '-', '*', '/'];
  }

  capturar(){
    this.miOpcion = this.selected;
  }

  calcular(n1: number, n2: number, miOpcion: string){
    return (this.resultado = eval(n1 +miOpcion + n2));
  }

}
