import { Component } from '@angular/core';
import { DialogService } from '../../shared/services';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  constructor(public dialogService: DialogService) {}

}
