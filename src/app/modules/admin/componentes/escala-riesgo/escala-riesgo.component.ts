import { Component, Inject, OnInit } from '@angular/core';
import { FichaUnoComponent } from '../../pages/ficha-uno/ficha-uno.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-escala-riesgo',
  templateUrl: './escala-riesgo.component.html',
  styleUrls: ['./escala-riesgo.component.css']
})
export class EscalaRiesgoComponent implements OnInit {

  controlForm: FormGroup | any
  showMess = false
  disableInput = true

  constructor(
    private matDialogRef: MatDialogRef<FichaUnoComponent>,
    public datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public fechaEvento: any
  ) { }

  ngOnInit(): void {
    const date = this.datePipe.transform(this.fechaEvento.fecha, 'MMM d, y')
    this.controlForm = new FormGroup({
      fecha: new FormControl(date),
      descripcion: new FormControl(this.fechaEvento.descripcion, [Validators.required]),
      escala: new FormControl(this.fechaEvento.escala, [Validators.required, this.validateNumberRange as ValidatorFn])
    })
    this.disableInput = true
  }

  guardarCambios() {
    if(this.controlForm.valid){
      this.matDialogRef.close(this.controlForm.value)
    }
  }

  validateNumberRange(control: FormControl) {
    let value = control.value;
    if (value !== null && (isNaN(value) || value < 1 || value > 5)) {
      return { numberOutOfRange: true };
    }
    return null;
  }

  close() {
    this.matDialogRef.close()
  }

}
