import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-page-no-found',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './page-no-found.component.html',
  styleUrl: './page-no-found.component.scss'
})
export class PageNoFoundComponent {

  text: string = 'Volver al inicio';
  routeButton: string = '/';

}
