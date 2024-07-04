import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from "./components/template/nav/nav.component";
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [
        RouterOutlet,
        MatToolbarModule,
        HeaderComponent,
        FooterComponent,
        NavComponent,
        MatCardModule
    ]
})
export class AppComponent {
  title = 'bookstore-front';
}
