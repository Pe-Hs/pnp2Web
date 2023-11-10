import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ArchivoServiceService } from 'src/app/services/archivo-service.service';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator !: MatPaginator;

  dataSource = new MatTableDataSource<any>()
  dataTable: any = []

  nroInsumos = 0
  sinStock = 0
  stockTotal = 0
  insPorTerminar = 0
  insDisponible = 0
  
  displayColumns : string[] = ['createdAt', 'nroFicha','apellVic', 'nivEsca', 'actions']
  
  constructor( private archivoService : ArchivoServiceService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.archivoService.getVentas()
      .subscribe( resp => {
        this.dataSource.data = resp
      })
  }

  addProveedor(){
    
  }

  detalleInsumo(item: any) {
   
  }

}
