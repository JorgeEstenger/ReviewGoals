import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[]=[];

  constructor() { 
  const lista1 = new Lista('1st Goals');
  const lista2 = new Lista('2nd Goals');
  }
}
