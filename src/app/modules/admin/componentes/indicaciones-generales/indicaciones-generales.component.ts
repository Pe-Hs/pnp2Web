import { Component, OnInit } from '@angular/core';
import { FormulariosComponent } from '../../pages/formularios/formularios.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-indicaciones-generales',
  templateUrl: './indicaciones-generales.component.html',
  styleUrls: ['./indicaciones-generales.component.css']
})
export class IndicacionesGeneralesComponent implements OnInit {

  controlForm: FormGroup | any
  showMessage = false
  constructor(
    private matDialogRef: MatDialogRef<FormulariosComponent>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.controlForm = new FormGroup({
      acceptTerms : new FormControl('',Validators.requiredTrue)
    })
  }

  close() {
    this.matDialogRef.close();
    this.router.navigateByUrl('/admin/formularios')
  }

  onFormSubmit() {
    if(this.controlForm.invalid){
      this.showMessage = true

    }else{
      this.matDialogRef.close();
      this.router.navigateByUrl('/admin/ficha1')
    }
  }

}
