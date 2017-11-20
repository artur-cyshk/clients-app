import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ClientDialogComponent } from './clientDialog.component';
import { DialogService, DateService } from '../../shared/services';
import { MockDialogService, MockDateService } from '../../../mocks';


describe('ClientsComponent', () => {
  let fixture;
  let component;
  let dialogService: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientDialogComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        { provide: DateService, useClass: MockDateService },
        { provide: DialogService, useClass: MockDialogService }
      ]
    });

    fixture = TestBed.createComponent(ClientDialogComponent);
    component = fixture.componentInstance;
    dialogService = TestBed.get(DialogService);
  });

  it('should create an instance', () => {
    expect(component).toBeDefined();
  });

  it('should make dialog visible', () => {
    const config = {
      data: {
        test: 'test'
      },
      onClose: () => console.log('closed')
    };
    dialogService.openDialog(config);
    fixture.detectChanges();
    expect(component.dialog).toEqual({
      config,
      visible: true
    });
  });

  it('should set right data', () => {
    const config = {
      data: {
        a: 'a',
        b: 'b',
        c: 'c'
      },
      onClose: () => console.log('closed')
    };
    dialogService.openDialog(config);
    fixture.detectChanges();
    expect(component.dialog.config.data).toEqual(config.data);
  });

  it('should set right form', () => {
    const config = {
      data: {
        name: 'test',
        phone: '555-555-5555',
        birthday: '10/10/2000',
        id: '1'
      },
      onClose: () => console.log('closed')
    };
    dialogService.openDialog(config);
    fixture.detectChanges();
    expect(component.clientForm.value).toEqual({
      name: 'test',
      phone: '555-555-5555',
      birthday: {
        date: {
          year: 2000,
          month: 10,
          day: 10
        }
      }
    });
  });

  it('should call close function with data', () => {
    spyOn(component, 'close').and.callThrough();
    const config = {
      data: {
        name: 'test',
        phone: '555-555-5555',
        birthday: '10/10/2000',
        id: '1'
      },
      onClose: () => console.log('closed')
    };
    dialogService.openDialog(config);
    fixture.detectChanges();
    component.clientForm.controls['name'].setValue('edited');
    component.save(component.clientForm);
    expect(component.close).toHaveBeenCalledWith(
      jasmine.objectContaining({
        name: 'edited',
        phone: '555-555-5555',
        birthday: '10/10/2000'
      })
    );
  });
});
