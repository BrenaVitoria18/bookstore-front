import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria} from './categoria/categoria-read/categoria.model';
import { environment } from '../../environment.ts/environment';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root',
  
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

    findAll():Observable<Categoria[]>{
      const url = `${this.baseUrl}categorias`
      return this.http.get<Categoria[]> (url)
    }

    create(categoria: Categoria): Observable<Categoria>{
      const url = `${this.baseUrl}categorias`;
      return this.http.post<Categoria>(url, categoria);
    }

    mensagem(str: String): void{
      this._snack.open(`${str}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
      })
    }

    
   
}
