import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Archivos } from '../shared/interfaces/archivos.interface';

@Injectable({
  providedIn: 'root'
})
export class ArchivoServiceService {

  private baseUrl = environment.baseUrl;

  constructor( private http : HttpClient) { }

  postFicha(data : any) : Observable<any> {
    const url = `${this.baseUrl}/arch/addArchivo`
    return this.http.post<any>(url, data)
  }

  getVentas() :Observable<Archivos[]> {
    const url = `${this.baseUrl}/arch/getAll`
    return this.http.get<Archivos[]>(url)
  }

}
