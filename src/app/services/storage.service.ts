import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class StorageService {

  retrieveData() {
    return JSON.parse(localStorage.getItem('map'));
  }

  storeData(data) {
    localStorage.setItem('map', JSON.stringify(data));
  }

  storeImage(image) {
    this.storeData({...this.retrieveData(), image});
  }

  removeImage() {
    this.storeData({...this.retrieveData(), image: null});
  }

  clearData() {
    localStorage.removeItem('map');
  }
}
