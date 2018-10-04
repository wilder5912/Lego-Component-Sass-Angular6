import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServeService {

  user: string;
  constructor() {
    this.user = 'Ninguno';
  }
}
