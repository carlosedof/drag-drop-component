import {Component} from '@angular/core';
import {MapData, Mark} from '../../models/map-data.model';
import {fadeInSelf, fadeInSelfFast, fadeOutSelf} from '../../animations/animations';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-marks-edit',
  templateUrl: './marks-edit.component.html',
  styleUrls: ['./marks-edit.component.scss'],
  animations: [fadeInSelfFast, fadeOutSelf, fadeInSelf]
})

export class MarksEditComponent {
  mapData: MapData;
  unmappedItems: Mark[] = [
    {id: 1, name: 'item 1'},
    {id: 2, name: 'item 2'}
  ];

  constructor(
    private storageService: StorageService
  ) {
    this.mapData = this.storageService.retrieveData() ? this.storageService.retrieveData() : {
      items: []
    };
  }
}
