import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-container',
  standalone: true,
  imports: [CommonModule],
  template: `
  <table
    align="center"
    width="100%"
    border="0"
    cellPadding="0"
    cellSpacing="0"
    role="presentation"
  >
    <tbody>
      <tr style="width: 100%;">
        <td>
          <ng-content></ng-content>
        </td>
      </tr>
    </tbody>
  </table>
`,
})
export class EmailContainerComponent { }
