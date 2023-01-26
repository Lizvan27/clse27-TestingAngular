import { Component } from '@angular/core';

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.css']
})
export class CalcuComponent {
 
  //Primero creamos una variable datos
  operadores;

  n1= '';
  n2= '';

  //aqui el resultado
  resultado: string = '0';

  //luego creamos una variable para guardar la opcion selecionada
  //contra esta variable vamos con el ngModel
  selected: string = '0'; // Iniciamos

  //cremoa la variable donde lo guardare
  miOpcion: string = '';

  constructor(){
    this.operadores = ['+', '-', '*', '/'];
  }

  capturar(){
    this.miOpcion = this.selected;
  }

  calcular(){
    return (this.resultado = eval(this.n1 + this.miOpcion + this.n2));
  }

}
