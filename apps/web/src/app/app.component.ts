import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailButtonComponent } from '@angular-email/button';

@Component({
  standalone: true,
  imports: [RouterModule, EmailButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web';
}
