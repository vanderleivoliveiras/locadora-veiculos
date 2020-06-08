import { Component, OnInit, ViewChild } from '@angular/core';
import { VeiculoService } from 'src/app/share/veiculo.service';
import {MatTableDataSource} from '@angular/material/table';
import veiculo from 'src/app/models/veiculo';
import {MatDialog} from '@angular/material/dialog'
import { VeiculoComponent } from '../veiculo/veiculo.component';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  constructor(private veiculoService: VeiculoService, public dialog: MatDialog) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Placa','Chassi','Renavam','Modelo','Marca','Ano','actions'];
  
  veiculos: veiculo[] = [];

  ngOnInit(): void {
    this.veiculoService.getListVeiculo().subscribe(
      (veiculos:veiculo[]) => {let array = veiculos.map(item => {
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
      
      this.listData = new MatTableDataSource(array);
    });
  }

  onCriarVeiculo(){
    this.veiculoService.initializeFormGroup();
    const dialogRef = this.dialog.open(VeiculoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onEditar(row){
    this.veiculoService.popularForm(row);
    this.dialog.open(VeiculoComponent);
  }

  onExcluir(row){
    this.veiculoService.excluirVeiculo(row._id)
      .subscribe((veiculos:veiculo) => this.veiculos = this.veiculos.filter(f => f._id != veiculos._id))
  }
}  
