import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a target="_blank" style="text-decoration: none; color: #ffffff; background-color: #007bff; padding: 10px 20px; border-radius: 5px; display: inline-block;">
      Button
    </a>
  `,
})
export class EmailButtonComponent { }
