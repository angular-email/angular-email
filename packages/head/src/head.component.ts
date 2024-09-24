import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-email-head',
  standalone: true,
  imports: [CommonModule],
  template: `
    <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
      <ng-content></ng-content>
    </head>
  `,
})
export class EmailHeadComponent {
  @Input() title?: string;

  constructor(private titleService: Title) {
    if (this.title) {
      this.titleService.setTitle(this.title);
    }
  }
}
