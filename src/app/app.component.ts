import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'book-monkey';
  constructor(public auth: AuthService) {}
}
