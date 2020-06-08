import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebService } from '../web.service';
import veiculo from '../models/veiculo';
@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private webService: WebService) { }
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

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      _id: '',
      placa: '',
      chassi: '',
      renavam: '',
      modelo: '',
      marca: '',
      ano: '',
    });
  }

  getVeiculo(){
    return this.webService.get('veiculo/');
  }

  getListVeiculo(){
    return this.webService.get('veiculo');
  }

  criarVeiculo(veiculo: veiculo){
    return this.webService.post('veiculo', veiculo);
  }

  atualizarVeiculo(veiculo: veiculo){
    return this.webService.patch('veiculo', veiculo);
  }
}
