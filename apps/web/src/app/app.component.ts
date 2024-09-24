import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmailButtonComponent } from '@angular-email/button';
import { EmailTextComponent } from '@angular-email/text';
import { EmailImgComponent } from '@angular-email/img';
import { EmailHtmlComponent } from '@angular-email/html';
import { EmailHeadComponent } from '@angular-email/head';
import { EmailBodyComponent } from '@angular-email/body';
import { EmailContainerComponent } from '@angular-email/container';
import { EmailColumnComponent } from '@angular-email/column';


@Component({
  standalone: true,
  imports: [RouterModule, EmailButtonComponent, EmailTextComponent, EmailImgComponent, EmailHtmlComponent, EmailHeadComponent, EmailBodyComponent, EmailContainerComponent, EmailColumnComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'web';
}
