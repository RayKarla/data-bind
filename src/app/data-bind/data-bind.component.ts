import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  url: any = 'http//localhost:4200';
  cursoAngular: boolean = true;

  urlImagem: any = 'http://lorempixel.com/400/200/food/';
  valorAtual: any = '';
  valorSalvo: any = '';
  ismouseOver: boolean = false;
  nome:string = 'hi';
  pessoa:any = {
    nome:'',
    idade:20
  }


  getValor() {
    return 1;
  }
  getCurtirCurso() {
    return false;
  }
  botaoClicado() {
    alert("hi,my friend!");
  }
  onKeyup(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor) {
    this.valorSalvo = valor;
  }
  mouseOutAlt() {
    this.ismouseOver = !this.ismouseOver;
  }
  constructor() { }

  ngOnInit() {
  }

}
