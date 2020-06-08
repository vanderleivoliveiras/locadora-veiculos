import { Component, OnInit } from '@angular/core';
import {VeiculoService} from '../../share/veiculo.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import veiculo from 'src/app/models/veiculo';
import {MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  constructor(public service: VeiculoService,
    public dialogRef: MatDialogRef<VeiculoComponent>,
    private _snackBar: MatSnackBar) { 

  }
  ngOnInit(): void {
  }
  veiculo = new veiculo();


  onSalvar(){ 
    this.veiculo = this.service.form.value;
    if(this.veiculo._id == ""){
    this.service.criarVeiculo(this.veiculo)
      .subscribe(() => {
        this.openSnackBar("Veículo Cadastrado com Sucesso!", false)
      },
      erro => {
        this.openSnackBar(erro, true);
      });
    }
    else{
      this.service.atualizarVeiculo(this.veiculo).subscribe(() => {
        this.openSnackBar("Veículo Editado com Sucesso!", false)
      },
      erro => {
        this.openSnackBar(erro, true);
      });
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
    this.openSnackBar("Campos limpos com sucesso.", false)
  }

  openSnackBar(msgSnackbar: string, erro: boolean) {
    this._snackBar.open(msgSnackbar , '', {
      duration: 7000,
      panelClass: [erro? 'red-snackbar': 'green-snackbar']
    });
  }
}
