import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-categoria-create',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './categoria-create.component.html',
  styleUrl: './categoria-create.component.css'
})
export class CategoriaCreateComponent {

}
