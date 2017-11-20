import { Component, OnInit } from '@angular/core';
import { ClientService, DialogService } from '../../shared/services';
import { Client, Loading } from '../../shared/models';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  headers: Array<string> = ['Name', 'Phone Number', 'Birthday', null];
  loadingState: Loading;

  constructor(public clientService: ClientService, private dialogService: DialogService) {}

  ngOnInit() {
    this.clientService.getClients();
    this.clientService.clientsLoadingState.subscribe((loading: Loading) => {
      this.loadingState = loading;
    });
  }

  addNewClient(): void {
    this.openClientDialog(
      (response) => {
        if (response) {
          this.clientService.add(response);
        }
      }
    );
  }

  editClient(client: Client): void {
    this.openClientDialog(
      (response) => {
        if (response) {
          this.clientService.edit({
            id: client.id,
            ...response
          });
        }
      },
      client
    );
  }

  openClientDialog(closeHandler: any, client ?: Client): void {
    this.dialogService.openDialog({
      data: client || {},
      onClose: closeHandler
    });
  }
}
