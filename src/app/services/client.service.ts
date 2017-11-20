import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { HelperService } from './helper.service';
import { Client, Loading } from '../models';


@Injectable()
export class ClientService {

  private observableListSubject: BehaviorSubject<Client[]> = new BehaviorSubject([]);
  private clientsLoadingSubject: BehaviorSubject<Loading> = new BehaviorSubject({
    isLoading: false
  });

  get clientsLoadingState(): Observable<Loading> {
    return this.clientsLoadingSubject.asObservable();
  }

  get observableList(): Observable<Client[]> {
    return this.observableListSubject.asObservable();
  }

  constructor(private httpService: HttpService, private helperService: HelperService) {}

  getClientsValue(): Client[] {
    return this.observableListSubject.getValue();
  }

  generateClientId(): string {
    return this.helperService.generateId();
  }

  getLoadingObject(isLoading: boolean, text?: string): Loading {
    return {
      info: text,
      isLoading: isLoading
    };
  }

  getClients(): void {
    this.clientsLoadingSubject.next(this.getLoadingObject(true, 'getting clients'));
    this.httpService.get('clients')
      .subscribe(
        (response: Client[]) => {
          const clients = response.map((client: Client) => {
            return {
              ...client,
              id: this.generateClientId()
            };
          });
          this.observableListSubject.next(clients);
          this.clientsLoadingSubject.next(this.getLoadingObject(false));
        },
        err => {
          console.log(err);
          this.clientsLoadingSubject.next(this.getLoadingObject(false));
        }
      );
  }

  add(client: Client): void {
    this.clientsLoadingSubject.next(this.getLoadingObject(true, 'adding new client'));
    this.httpService.put('clients', client)
      .subscribe(
        () => {
          client.id = this.generateClientId();
          this.observableListSubject.next(this.getClientsValue().concat(client));
          this.clientsLoadingSubject.next(this.getLoadingObject(false));
        },
        err => {
          console.log(err);
          this.clientsLoadingSubject.next(this.getLoadingObject(false));
        }
      );
  }

  edit(editedClient: Client): void {
    const clients = this.getClientsValue().map((client: Client) => {
      return client.id === editedClient.id ? editedClient : client;
    });
    this.observableListSubject.next(clients);
  }
}
