import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Dialog } from '../app/shared/models';


export class MockDialogService {

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
