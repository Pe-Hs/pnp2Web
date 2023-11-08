import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormulariosComponent } from '../../pages/formularios/formularios.component';

@Component({
  selector: 'app-verificacion-ficha',
  templateUrl: './verificacion-ficha.component.html',
  styleUrls: ['./verificacion-ficha.component.css']
})
export class VerificacionFichaComponent implements OnInit {

  controlForm: FormGroup | any
  showMessage = false

  constructor(
    private matDialogRef: MatDialogRef<FormulariosComponent>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
    this.controlForm = new FormGroup({
      acceptTerms : new FormControl('',Validators.requiredTrue),
    })
  }

  close() {
    this.matDialogRef.close(1);    
  }

  onFormSubmit() {
    if(this.controlForm.invalid){
      this.showMessage = true

    }else{
      this.matDialogRef.close(2);
      this.router.navigateByUrl('/admin/formularios')     
    }
  }

}
