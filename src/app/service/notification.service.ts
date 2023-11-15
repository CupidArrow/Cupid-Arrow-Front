import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notifications = new Subject<string>();

  public events = this._notifications.asObservable();

  public notify(message: string) {
    this._notifications.next(message);
  }

  constructor() { }
}
