import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    _id: new FormControl(''),
    placa: new FormControl(''),
    chassi: new FormControl(''),
    renavam: new FormControl(''),
    modelo: new FormControl(''),
    marca: new FormControl(''),
    ano: new FormControl(''),
  });
}
