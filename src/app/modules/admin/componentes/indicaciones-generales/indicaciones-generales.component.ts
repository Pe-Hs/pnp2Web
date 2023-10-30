import { Component, OnInit } from '@angular/core';
import { FormulariosComponent } from '../../pages/formularios/formularios.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indicaciones-generales',
  templateUrl: './indicaciones-generales.component.html',
  styleUrls: ['./indicaciones-generales.component.css']
})
export class IndicacionesGeneralesComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<FormulariosComponent>,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.matDialogRef.close();
    this.router.navigateByUrl('/admin/ficha1')
  }

}
