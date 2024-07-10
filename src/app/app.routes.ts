import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import path from 'path';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categorias', component: CategoriaReadComponent },
    { path: 'categorias/create', component: CategoriaCreateComponent }
];
