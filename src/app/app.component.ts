import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from './components/template/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [
        RouterOutlet,
        MatToolbarModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class AppComponent {
  title = 'bookstore-front';
}
