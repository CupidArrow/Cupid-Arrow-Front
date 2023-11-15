import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NotificationService } from '../../service/notification.service';
import { PeopleService } from '../../service/people.service';
import { People } from '../../shared/people';
import { BannerComponent } from '../shared/banner/banner.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    ButtonComponent,
    NgOptimizedImage
  ],
  templateUrl: './match.component.html',
  styleUrl: './match.component.scss'
})
export class MatchComponent {
  constructor(private notificationService: NotificationService, private _people: PeopleService) { }
  
  people : People[] = [];
  user !: People
  city !: string; 

  ngOnInit() {
    if (localStorage.getItem('matchFormData')) {
      const formData = localStorage.getItem('matchFormData');
      if (formData) {
        this.user = JSON.parse(formData);
        this.city = this.user.city;
        console.log(this.city);
      }
    }

    this._people.getAllPeople().subscribe(
      (data) => {
        this.people = data;
        console.log(this.people);
      },
      (error) => {
        this.notificationService.notify('Error al cargar los datos');
      }
    );
  }

  text = 'Los Resultados de tu Búsqueda son los siguientes';
  buttonText = 'Volver a Buscar';
  route = '/home';
}
