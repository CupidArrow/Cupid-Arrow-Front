import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../shared/button/button.component';
import { NotificationService } from '../../service/notification.service';
import { People } from '../../shared/people';
import { PeopleService } from '../../service/people.service';
import { BannerComponent } from '../shared/banner/banner.component';
import { Router } from '@angular/router';
import { MatchComponent } from '../match/match.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    BannerComponent,
    MatchComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  textHome: string = 'Encuentra a tu Pareja Ideal';

  matchForm = new FormGroup({
    sex: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    interest: new FormControl('', Validators.required)
  });

  constructor(private notificationService: NotificationService, private _people: PeopleService, private router: Router) { }

  people: People = {
    sex: '',
    city: '',
    interests: ''
  }

  cities = [
    "Lima", "Arequipa", "Trujillo", "Chiclayo", "Piura", "Iquitos", "Cusco", "Huancayo", "Chimbote", "Pucallpa", "Tacna", "Ica", "Juliaca", "Sullana", "Ayacucho", "Huaraz", "Tarapoto", "Puno", "Tumbes", "Moquegua", "Huaral", "Pisco", "Cerro de Pasco", "Chincha Alta", "Huanuco", "Cajamarca", "Callao"
  ];

  interests = [
    "Tocar un instrumento", "Jugar futbol", "Hacer trekking", "Jugar voley playa",
    "Hacer surf", "Practicar ciclismo", "Practicar deportes extremos", "Practicar deportes acuaticos", "Aprender danzas folkloricas", "Aprender danzas modernas",
    "Hacer camping", "Hacer excursiones", "Cocinar", "Explorar la gastronomia regional", "Explorar cultura del pais", "Explorar el pais"
  ];

  handlerContactSubmit() {
    if (!this.matchForm.valid) {
      this.notificationService.notify('Por favor, complete todos los campos');
    }
    else {
      this.people = this.matchForm.value as People;
      
      localStorage.setItem('matchFormData', JSON.stringify(this.people));

      this._people.postPeople(this.people).subscribe(
        () => {
          this.notificationService.notify('Se ha enviado su solicitud');

          this.router.navigate(['/match']);
        },
        (error) => {
          console.log(error);
          this.notificationService.notify('Ha ocurrido un error');
        }
      );
    }
  }
}
