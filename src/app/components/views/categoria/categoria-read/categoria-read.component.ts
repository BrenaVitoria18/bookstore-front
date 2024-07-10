import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { CategoriaService } from '../../categoria.service';
import { Categoria } from './categoria.model';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';



@Component({
  selector: 'app-categoria-read',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './categoria-read.component.html',
  styleUrl: './categoria-read.component.css'
})
export class CategoriaReadComponent {
  categorias: Categoria[] = [];
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];
  
  constructor(private service: CategoriaService, private router: Router){}

  findAll(){
    this.service.findAll().subscribe(response => {
      console.log(response);
      this.categorias = response;
    })
  }

  ngOnInit(): void {
    this.findAll();
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(["categorias/create"])
  }
  
}

