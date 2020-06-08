import { Component, OnInit, ViewChild } from '@angular/core';
import { VeiculoService } from 'src/app/share/veiculo.service';
import { MatTableDataSource } from '@angular/material/table';
import veiculo from 'src/app/models/veiculo';
import { MatDialog } from '@angular/material/dialog'
import { VeiculoComponent } from '../veiculo/veiculo.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  constructor(private veiculoService: VeiculoService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  veiculosData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Placa', 'Chassi', 'Renavam', 'Modelo', 'Marca', 'Ano', 'actions'];
  veiculos: veiculo[] = [];

  ngOnInit(): void {
    this.veiculoService.getListVeiculo().subscribe(
      (veiculos: veiculo[]) => {
      this.veiculos = veiculos.map(item => {
        return {
          $key: "",
          _id: item._id,
          placa: item.placa,
          chassi: item.chassi,
          renavam: item.renavam,
          modelo: item.modelo,
          marca: item.marca,
          ano: item.ano
        };
      });

        this.veiculosData = new MatTableDataSource(this.veiculos);
      });
  }

  onCriarVeiculo() {
    this.veiculoService.initializeFormGroup();
    this.dialog.open(VeiculoComponent)
      .afterClosed()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  onEditar(row) {
    this.veiculoService.popularForm(row);
    const dialogRef = this.dialog.open(VeiculoComponent)
      .afterClosed()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  onExcluir(veiculo) {
    this.veiculoService.excluirVeiculo(veiculo._id)
      .subscribe(() => {
        this.veiculos = this.veiculos.filter(f => f._id != veiculo._id)
        this.veiculosData = new MatTableDataSource(this.veiculos);
        this.openSnackBar("Veículo Excluido com Sucesso!", false)
      },
        erro => {
          this.openSnackBar(erro, true)
        })
  }

  openSnackBar(msgSnackbar: string, erro: boolean) {
    this._snackBar.open(msgSnackbar, '', {
      duration: 7000,
      panelClass: [erro ? 'red-snackbar' : 'green-snackbar']
    });
  }
}  
