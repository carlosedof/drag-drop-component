import {Component} from '@angular/core';
import {fadeInSelf, fadeInSelfFast, fadeOutSelf} from '../../animations/animations';
import {StorageService} from '../../services/storage.service';
import {MapData, Mark} from '../../models/map-data.model';

@Component({
  selector: 'app-marks-view',
  templateUrl: './marks-view.component.html',
  styleUrls: ['./marks-view.component.scss'],
  animations: [fadeInSelfFast, fadeOutSelf, fadeInSelf]
})

export class MarksViewComponent {
  mapData: MapData = {
    items: []
  };
  unmappedItems: Mark[] = [
    {id: 1, name: 'item 1'},
    {id: 2, name: 'item 2'}
  ];

  constructor(
    private storageService: StorageService
  ) {
    this.mapData = this.storageService.retrieveData();
  }

}
