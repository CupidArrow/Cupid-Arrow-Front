import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../service/notification.service';

@Component({
  selector: 'notification-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {

  message : string = '';
  
  constructor( private notificationService: NotificationService ) {}

  ngOnInit(): void {
    this.notificationService.events.subscribe((message: string) => {
      this.message = message;
    });
  }
}
