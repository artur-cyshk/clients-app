import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Client, Loading } from '../app/shared/models';


export class MockClientService {

  private observableListSubject: BehaviorSubject<Client[]> = new BehaviorSubject([
    {
      name: 'test1',
      phone: '555-555-5555',
      birthday: '11/11/1994',
      id: '0'
    },
    {
      name: 'test2',
      phone: '555-555-5556',
      birthday: '11/11/1993',
      id: '1'
    },
    {
      name: 'test3',
      phone: '555-555-5557',
      birthday: '12/12/1992',
      id: '2'
    }
  ]);
  private clientsLoadingSubject: BehaviorSubject<Loading> = new BehaviorSubject({
    isLoading: false
  });

  get clientsLoadingState(): Observable<Loading> {
    return this.clientsLoadingSubject.asObservable();
  }

  get observableList(): Observable<Client[]> {
    return this.observableListSubject.asObservable();
  }

  getClientsValue(): Client[] {
    return this.observableListSubject.getValue();
  }

  getLoadingObject(isLoading: boolean, text?: string): Loading {
    return {
      info: text,
      isLoading: isLoading
    };
  }

  getClients(): void {
    this.clientsLoadingSubject.next(this.getLoadingObject(true, 'getting clients'));
    const clients = this.getClientsValue().map((client: Client, i) => {
      return {
        ...client,
        id: i.toString()
      };
    });
    this.observableListSubject.next(clients);
  }

  add(client: Client): void {
    this.clientsLoadingSubject.next(this.getLoadingObject(true, 'adding new client'));
    client.id = 'new';
    this.observableListSubject.next(this.getClientsValue().concat(client));
    this.clientsLoadingSubject.next(this.getLoadingObject(false));
  }

  edit(editedClient: Client): void {
    const clients = this.getClientsValue().map((client: Client) => {
      return client.id === editedClient.id ? editedClient : client;
    });
    this.observableListSubject.next(clients);
  }
}
