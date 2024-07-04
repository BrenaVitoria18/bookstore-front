import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import path from 'path';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'categorias', component: CategoriaReadComponent }
];
