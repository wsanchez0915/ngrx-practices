import {
  Component,
  OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { DividirAction, MultiplicarAction } from '../state/contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  // @Input() contador:number;
  // @Output() cambioContador = new EventEmitter<number>();
  contador:number;
  constructor( private store: Store<AppState>) {
    this.contador=0;
   }

  ngOnInit(): void {

    this.store.select('contador')
    .subscribe( contador => {
      this.contador = contador;
    })
  }

  multiplicar(){
    const accion = new MultiplicarAction(2);
    this.store.dispatch( accion );

  }

  dividir(){
    const accion = new DividirAction(2);
    this.store.dispatch( accion );
    // this.contador /=2;
    // this.cambioContador.emit(this.contador);
  }

  resetNieto( nuevoContador: number ){
    this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);

  }
}
