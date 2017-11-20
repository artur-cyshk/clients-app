import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogService, DateService } from '../../services';
import { Client } from '../../models';


@Component({
  selector: 'app-client-dialog',
  templateUrl: './clientDialog.component.html',
  styleUrls: ['./clientDialog.component.scss']
})
export class ClientDialogComponent implements OnInit {

  dialog: {visible: boolean, config?: {data: any, onClose: any}};
  private clientForm: FormGroup;
  private datepickerOptions = {
    dateFormat: 'mm/dd/yyyy',
    editableDateField: false
  };

  constructor(private dialogService: DialogService, private dateService: DateService) { }

  ngOnInit() {
    this.dialogService.dialogData.subscribe(dialog => {
      this.dialog = dialog;
      const data = dialog.config ? dialog.config.data : {};
      this.setForm(data || {});
    });
  }

  setForm(clientData?: any): void {
    this.clientForm = new FormGroup({
      name: new FormControl(
        clientData.name || '',
        [Validators.required]
      ),
      phone: new FormControl(
        clientData.phone || '',
        Validators.compose([Validators.required, Validators.pattern(/\d{3}[\-]\d{3}[\-]\d{4}/gi)])
      ),
      birthday: new FormControl(
        this.dateService.getFormattedDate(clientData.birthday) || null,
        [Validators.required]
      )
    });
  }

  save(client: FormGroup): void {
    this.close({
      ...client.value,
      birthday: this.dateService.getSimpleDate(client.value.birthday)
    });
  }

  close(response?: Client): void {
    const { onClose } = this.dialog.config;
    if (onClose) {
      onClose(response);
    }
    this.dialogService.closeDialog();
  }
}
