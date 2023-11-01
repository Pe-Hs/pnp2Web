import { Component, Inject, OnInit } from '@angular/core';
import { FichaUnoComponent } from '../../pages/ficha-uno/ficha-uno.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-escala-riesgo',
  templateUrl: './escala-riesgo.component.html',
  styleUrls: ['./escala-riesgo.component.css']
})
export class EscalaRiesgoComponent implements OnInit {

  controlForm : FormGroup | any
  showMess = false

  constructor(
    private matDialogRef: MatDialogRef<FichaUnoComponent>,
    public datePipe : DatePipe,
    @Inject(MAT_DIALOG_DATA) public fechaEvento : any
  ) { }

  ngOnInit(): void {
    const date = this.datePipe.transform(this.fechaEvento.fecha, 'MMM d, y')
    this.controlForm = new FormGroup({
      fecha: new FormControl(date),
      descripcion : new FormControl(this.fechaEvento.descripcion, [Validators.required]),
      escala: new FormControl(this.fechaEvento.escala, [Validators.required ])
    })
  }

  guardarCambios(){
    this.showMess == true
    // let escale = this.controlForm.get('escala').value
    // if(escale  > 5){
    //   console.log(' if '+ escale);
    // }else{
    //   this.showMess == false
    //   console.log(' else ' + escale);
    // }
  }

  close(){
    this.matDialogRef.close()
  }

}
