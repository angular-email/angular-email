import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailButtonComponent } from '@angular-email/button';
import { EmailTextComponent } from '@angular-email/text';

@Component({
  standalone: true,
  imports: [RouterModule, EmailButtonComponent, EmailTextComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'web';
}
