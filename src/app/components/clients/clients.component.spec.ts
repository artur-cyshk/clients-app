import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ClientsComponent } from './clients.component';
import { ClientDialogComponent } from '../clientDialog/clientDialog.component';
import { ClientService, DialogService, DateService } from '../../shared/services';
import { MockClientService, MockDialogService, MockDateService } from '../../../mocks';


describe('ClientsComponent', () => {
  let fixture;
  let component;
  let dialog;
  let dialogComponent;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        ClientsComponent,
        ClientDialogComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        { provide: DateService, useClass: MockDateService },
        { provide: ClientService, useClass: MockClientService },
        { provide: DialogService, useClass: MockDialogService }
      ]
    });

    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    dialog = TestBed.createComponent(ClientDialogComponent);
    dialogComponent = dialog.componentInstance;
    fixture.detectChanges();

  });

  it('should create an instance', () => {
    expect(component).toBeDefined();
  });

  it('should have three clients', () => {
    expect(component.clientService.getClientsValue().length).toEqual(3);
  });

  it('should add new client', () => {
    const newClient = {
      value: {
        name: 'Artur',
        phone: '555-555-5555',
        birthday: {
          date: {
            year: 2017,
            month: 6,
            day: 10
          }
        }
      }
    };
    component.addNewClient();
    dialog.detectChanges();
    dialogComponent.save(newClient);
    fixture.detectChanges();
    const clients = component.clientService.getClientsValue();
    expect(clients[clients.length - 1]).toEqual({
      ...newClient.value,
      birthday: '6/10/2017',
      id: 'new'
    });
  });

  it('should edit client', () => {
    const willBeEditedClient = component.clientService.getClientsValue()[0];
    component.editClient(willBeEditedClient);
    dialog.detectChanges();
    dialogComponent.clientForm.controls['name'].setValue('Edited');
    dialogComponent.save(dialogComponent.clientForm);
    fixture.detectChanges();
    expect(component.clientService.getClientsValue()[0]).toEqual({
      ...willBeEditedClient,
      name: 'Edited'
    });
  });
});
