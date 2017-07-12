import { Component, OnInit, Input, EventEmitter, Output,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor:number = 0; 

  @Output() alterouValor = new EventEmitter();

  @ViewChild('campoInput') campoValor:ElementRef;
  

  add(){
    this.campoValor.nativeElement.value++;
    this.alterouValor.emit({novoValor: this.valor});
  }
  remove(){
    this.campoValor.nativeElement.value--;
    this.alterouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
