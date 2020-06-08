import { Component, OnInit } from '@angular/core';
import {VeiculoService} from '../../share/veiculo.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import veiculo from 'src/app/models/veiculo';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  constructor(public service: VeiculoService) { 

  }
  ngOnInit(): void {
  }
  veiculo = new veiculo();


  onSalvar(){
    
    this.service.form;
    this.service.criarVeiculo(new veiculo());
  }

  onLimpar(){
    this.service.form.reset();
    this.service.initializeFormGroup(); 
  }
}
