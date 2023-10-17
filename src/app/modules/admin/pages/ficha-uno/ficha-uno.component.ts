import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-ficha-uno',
  templateUrl: './ficha-uno.component.html',
  styleUrls: ['./ficha-uno.component.css']
})
export class FichaUnoComponent implements OnInit {

  controlForm1: FormGroup | any
  controlForm2: FormGroup | any
  disableDisca = new FormControl(false)

  tipoDocList = [
    { tipo: "DNI" },
    { tipo: "Carnet Extranjeria", },
    { tipo: "No Tiene ni recuerda el Numero", },
    { tipo: "Otro", },
  ]

  tipoDisList = [
    { tipo: "Fisica", },
    { tipo: "Visual", },
    { tipo: "Auditiva", },
    { tipo: "Psicosocial", },
    { tipo: "Intelectual", },
  ]

  listLengua = [
    { tipo: "Castellano", },
    { tipo: "Quechua", },
    { tipo: "Aymara", },
    { tipo: "Otro", },
  ]

  preguntasValoracion = [
    "1. ¿En el último año, la violencia física contra usted ha aumentado en gravedad o frecuencia? ",
    "2. ¿Éltiene algún arma o podría conseguir un arma con facilidad? (pistola, cuchillo, machete, u otros)",
    "2a. ¿Han vivido juntos durante el último año? [si dice NO, pasar a pregunta 4)",
    "3. Usted me dice que han vivido juntos en el último año. ¿Siguen viviendo juntos o lo ha dejado? si siguen viviendo juntos marcar Si; si luego de vivir juntos lo ha dejado marcar NO]",
    "4. ¿Actualmente, él tiene trabajo estable? (si ella no sabe, no marcar nada]",
    "5. ¿Alguna vez él ha usado o la ha amenazado con un arma (pistola, cuchillo, machete u otros)? ",
    "5a. Si su respuesta fue “SI”, ¿fue con una pistola o cuchillo?",
    "6. ¿ta ha amenazado con matarla?",
    "7. ¿Alguna vez usted lo denunció por violencia familiar (porque él le pegó) ante la comisaría, fiscalía, juzgado o ante alguna autoridad comunal",
    "8. ¿Él la ha obligado alguna vez a tener relaciones sexuales? 2/0",
    "9. ¿Él ha intentado ahorcarla?",
    "10. ¿Él consume drogas? Por ejemplo, como la marihuana, pasta básica, cocaína u otras. ",
    "11. ¿Él es alcohólico o tiene problemas con el alcohol (trago 0 licor)? ",
    "12. ¿Le controla la mayoría o todas sus actividades diarias? Por ejemplo, no le deja que vea a sus familiares o amistades, le controla cuánto dinero puede gastar, etc.",
    "12a. Si él trata de controlarla pero ella no lo permite, márquelo aqui",
    "13. ¿Él se pone celoso de forma constante y violenta? Por ejemplo, le dice: “si no eres mía, no serás de nadie” u otras similares.",
    "14. ¿Cuándo usted estuvo embarazada, alguna vez él la golpeó? ",
    "15. ¿Alguna vez él ha amenazado o ha intentado suicidarse?",
    "16. ¿Él la ha amenazado con hacerle daño a sus hijos?",
    "17. ¿Cree que él es capaz de matarla? ",
    "18. ¿Él realiza alguna de las siguientes acciones?: La llama insistentemente, le deja mensajes en su teléfono o én redes sociales o destruye sus cosas (celular, ropa u otro).",
    "19. ¿Alguna vez usted ha intentado o ha amenazado con quitarse la vida?"

  ]

  isEditable = true;

  constructor() { }

  ngOnInit(): void {

    this.controlForm1 = new FormGroup({
      nombreCompleto: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      apePaterno: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      apeMaterno: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      edad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      nroDocumento: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      nroHijos: new FormControl('', [Validators.pattern('^[0-9]+$')]),
      tipoDoc: new FormControl('', [Validators.required]),
      ocupa: new FormControl('', [Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(50)]),
      discap: new FormControl({ value: '', disabled: this.disableDisca.value! }, [Validators.required]),
      tipoLengua: new FormControl('', [Validators.required]),
      especLengua: new FormControl('', [Validators.required]),
    })


    this.controlForm2 = new FormGroup({
      secondCtrl: new FormControl('', [Validators.required])
    })

  }

}
