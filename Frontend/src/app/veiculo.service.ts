import { Injectable } from '@angular/core';
import {} from "@angular/common/http"
import { WebService } from './web.service';
import veiculo from './models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private webService: WebService) { }

  getVeiculo(){
    return this.webService.get('veiculo');
  }

  criarVeiculo(veiculo: veiculo){
    return this.webService.post('veiculo', veiculo);
  }

  atualizarVeiculo(veiculo: veiculo){
    return this.webService.patch('veiculo', veiculo);
  }
}
