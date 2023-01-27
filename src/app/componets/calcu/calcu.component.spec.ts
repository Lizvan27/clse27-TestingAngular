import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';

import { CalcuComponent } from './calcu.component';

describe('CalcuComponent', () => {
  let component: CalcuComponent;
  let fixture: ComponentFixture<CalcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dos numeros, multiplicar(30,10, "*") resultado 300 ', ()=>{
    const fixture = TestBed.createComponent(CalcuComponent);
    const component = fixture.componentInstance;

    const dtos = {n1: 30, n2: 10,miOption:'*'}
    const expectedResult = 300;
    const resul= component.calcular(dtos.n1,dtos.n2,dtos.miOption);
    expect(resul).toEqual(expectedResult);
  });
  it('dos numeros, dividir(30,3, "/") resultado 10 ', ()=>{
    const fixture = TestBed.createComponent(CalcuComponent);
    const component = fixture.componentInstance;

    const dtos = {n1: 30, n2: 10, miOption:'/'}
    const expectedResult = 10;
    const resul= component.calcular(dtos.n1,dtos.n2,dtos.miOption);
    expect(resul).toEqual(expectedResult);
    
  });
  it('dos numeros, sumar(20,10, "+") resultado 30 ', ()=>{
    const fixture = TestBed.createComponent(CalcuComponent);
    const component = fixture.componentInstance;

    const dtos = {n1: 20, n2: 10, miOption:'+'}
    const expectedResult = 30;
    const resul= component.calcular(dtos.n1,dtos.n2,dtos.miOption);
    expect(resul).toEqual(expectedResult);

  });
  it('dos numeros, restar(50,10, "-") resultado 40 ', ()=>{
    const resul = component.calcular(50,10,'-');
    const expectedResult = 40;
    expect(expectedResult).toBe(resul);
    
  });
});
