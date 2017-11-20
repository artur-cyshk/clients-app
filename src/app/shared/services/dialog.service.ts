import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Dialog } from '../models';


@Injectable()
export class DialogService {

  private dialogDataSubject: BehaviorSubject<Dialog> = new BehaviorSubject({
    visible: false
  });

  get dialogData(): Observable<Dialog> {
    return this.dialogDataSubject.asObservable();
  }

  openDialog(config: {data: Object, onClose: Function}): void {
    this.dialogDataSubject.next({
      visible: true,
      config: config
    });
  }

  closeDialog(): void {
    this.dialogDataSubject.next({
      visible: false
    });
  }
}
