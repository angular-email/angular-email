import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailButtonComponent } from '@angular-email/button';
import { EmailTextComponent } from '@angular-email/text';
import { EmailImgComponent } from '@angular-email/img';
import { EmailHtmlComponent } from '@angular-email/html';
@Component({
  standalone: true,
  imports: [RouterModule, EmailButtonComponent, EmailTextComponent, EmailImgComponent, EmailHtmlComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'web';
}
