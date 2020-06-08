import { Component, OnInit, ViewChild } from '@angular/core';
import { VeiculoService } from 'src/app/share/veiculo.service';
import {MatTableDataSource} from '@angular/material/table';
import veiculo from 'src/app/models/veiculo';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  constructor(private veiculoService: VeiculoService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Placa','Chassi','Renavam','Modelo','Marca','Ano','actions'];

  teste: { placa: string, chassi: string, renavam: string, modelo: string, marca: string, ano: string }[] = [
    { placa: "string", chassi: "string", renavam: "string", modelo: "string", marca: "string", ano: "string"  },
    { placa: "string", chassi: "string", renavam: "string", modelo: "string", marca: "string", ano: "string"  },
    { placa: "string", chassi: "string", renavam: "string", modelo: "string", marca: "string", ano: "string"  }
];

  ngOnInit(): void {
    this.veiculoService.getListVeiculo().subscribe(
      list => {let array = this.teste.map(item => {
        return {
          $key: "",
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

}
