export interface DatosPersonales {
    "formTitle": "Datos Personales",
    "formDescription": "Formulario de los Datos Persionales de la Victima",
    "formFields": [
        {
            "label": "Nombre Completo",
            "type": "text",
            "required": true,
            "placeholder": "Nombre Completo"
        },
        {
            "label": "Apellido Completo",
            "type": "text",
            "required": true,
            "placeholder": "Apellido Completo"
        },
        {
            "label": "Edad Victima",
            "type": "number",
            "required": true,
            "placeholder": "Edad"
        },
        {
            "label": "Nro. Hijos/as",
            "type": "number",
            "required": true,
            "placeholder": ""
        },
        {
            "label": "Documento de Indentidad",
            "type": "select",
            "required": true,
            "options": [
                "DNI",
                "Carnet Extranjeria",
                "No Tiene",
                "No Tiene Ni recuerda el Numero",
                "Otro"
            ]
        },
        {
            "label": "Numero de Documento",
            "type": "number",
            "required": true,
            "placeholder": "Ejm. 78453212"
        }
    ]
}