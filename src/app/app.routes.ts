import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import path from 'path';

export const routes: Routes = [
    { path: '', component: HomeComponent }
];
