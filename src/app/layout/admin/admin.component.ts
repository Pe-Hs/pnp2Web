import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosOperario } from 'src/app/shared/interfaces/datosOperario';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  hide = false;
  hide2 = true;
  matNoti = 0;
  nroProductos = 0
  nroInsumos = 0

  distrito = ""
  nombreOpe = ""
  apellidoOpe = ""
  rangoOpe = ""
  imgOpe = ""

  constructor(
    private router : Router,
    private datosOpe : DatosOperario,
  ) { }

  ngOnInit(): void {
    this.distrito = this.datosOpe.datos[0].distrito;
    this.nombreOpe = this.datosOpe.datos[0].nombres;
    this.apellidoOpe = this.datosOpe.datos[0].apellidos;
    this.rangoOpe = this.datosOpe.datos[0].rango;
    this.imgOpe = this.datosOpe.datos[0].urlImage
  }

  logout() {
    this.router.navigateByUrl('/home')
  }

}
