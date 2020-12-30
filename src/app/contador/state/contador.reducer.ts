import { actions, DECREMENTAR, INCREMENTAR, MULTIPLICAR, DIVIDIR } from './contador.action';


export function contadorReducer( state: number = 0, action: actions){
  switch (action.type){
      case INCREMENTAR:
        return state + 1;

      case DECREMENTAR:
        return state - 1;

      case MULTIPLICAR:
        return state * action.payload;

      case DIVIDIR:
        return state / action.payloads;

      default:
        return state;
  }
}
