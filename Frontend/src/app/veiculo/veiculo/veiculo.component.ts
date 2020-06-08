import { Component, OnInit } from '@angular/core';
import {VeiculoService} from '../../share/veiculo.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import veiculo from 'src/app/models/veiculo';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  constructor(public service: VeiculoService,
    public dialogRef: MatDialogRef<VeiculoComponent>) { 

  }
  ngOnInit(): void {
  }
  veiculo = new veiculo();


  onSalvar(){ 
    this.veiculo = this.service.form.value;
    if(this.veiculo._id == ""){
    this.service.criarVeiculo(this.veiculo)
      .subscribe(() => {});
    }
    else{
      this.service.atualizarVeiculo(this.veiculo).subscribe(() => {});
    }
    this.onClose();
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  onLimpar(){
    this.service.form.reset();
    this.service.initializeFormGroup(); 
  }
}
