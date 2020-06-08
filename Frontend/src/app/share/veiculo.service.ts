import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebService } from '../web.service';
import veiculo from '../models/veiculo';
import * as _ from 'lodash';
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
    return this.webService.patch(`veiculo/${veiculo._id}`, veiculo);
  }

  excluirVeiculo(id: string){
    return this.webService.delete(`veiculo/${id}`)
  }

  popularForm(veiculo){
    this.form.setValue({
      $key: new FormControl(null),
      _id: veiculo._id,
      placa: veiculo.placa,
      chassi: veiculo.chassi,
      renavam: veiculo.renavam,
      modelo: veiculo.modelo,
      marca: veiculo.marca,
      ano: veiculo.ano,
    });
  }
}
