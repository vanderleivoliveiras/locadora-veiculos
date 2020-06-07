import { Component, OnInit } from '@angular/core';
import {VeiculoService} from '../../share/veiculo.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  constructor(public service: VeiculoService) { }

  ngOnInit(): void {
  }

}
