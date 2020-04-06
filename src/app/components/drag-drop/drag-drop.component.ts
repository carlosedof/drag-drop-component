import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MapData, Mark} from '../../models/map-data.model';
import {fadeInSelf, fadeInSelfFast, fadeOutSelf} from '../../animations/animations';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  animations: [fadeInSelfFast, fadeOutSelf, fadeInSelf]
})

export class DragDropComponent implements OnInit {

  @ViewChild('image') image;
  baseImage: string;
  fullList: Mark[];
  list: Mark[];
  x;
  y;
  draggingItem;
  newItem;
  displayInfoLayer;

  @Input()
  readonly: boolean;

  @Output()
  dragChange: EventEmitter<Mark[]> = new EventEmitter();

  @Input()
  mapData: MapData = new MapData();

  @Input()
  set unmappedItems(unmappedItems: Mark[]) {
    this.list = unmappedItems;
    if (!this.fullList) {
      this.fullList = unmappedItems;
    }
  }

  get unmappedItems() {
    return this.list;
  }

  constructor(
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.unmappedItems = this.unmappedItems
      .filter( uit => !this.findInsideMapItems(uit.id));
  }

  findInsideMapItems(id: number) {
    return !!this.mapData.items.find( i => i.id === id);
  }

  closeInfolayer() {
    setTimeout( () => this.displayInfoLayer = false, 500 );
  }

  droppedOut() {
    if (this.draggingItem) {
      this.mapData.items = this.mapData.items.filter( i => i.x !== this.draggingItem.x || i.y !== this.draggingItem.y);
      if (!this.unmappedItems.find( uit => this.draggingItem.id === uit.id)) {
        this.unmappedItems.push(this.fullList.find( uit => this.draggingItem.id === uit.id));
      }
    }
  }

  dragStart(item) {
    this.newItem = item;
    setTimeout( () => this.displayInfoLayer = true, 0);
  }

  dropped(event) {
    if (!this.readonly) {
      if (this.draggingItem) {
        this.mapData.items = this.mapData.items.filter( i => i.x !== this.draggingItem.x || i.y !== this.draggingItem.y);
      }
      const obj: Mark = {
        id: this.newItem ? this.newItem.id : this.draggingItem.id,
        x: (((event.x - this.image.nativeElement.x) * 100 /  this.image.nativeElement.width) - 1.5).toFixed(1),
        y: (((event.y - this.image.nativeElement.y) * 100 /  this.image.nativeElement.height - 1.5)).toFixed(1)
      };
      if (this.draggingItem && !this.newItem) {
        obj.id = this.draggingItem.id;
      }
      this.mapData.items.push(obj);
      if (this.unmappedItems.find( i => this.newItem && i.id === this.newItem.id)) {
        this.unmappedItems = this.unmappedItems.filter( uit => uit.id !== this.newItem.id);
      }
      this.newItem = null;
      this.draggingItem = null;
      this.displayInfoLayer = false;
      this.storageService.storeData({...this.mapData, image: this.baseImage});
    }
  }

  setDraggingItem(item) {
    if (item) {
      this.draggingItem = item;
    }
    setTimeout( () => this.displayInfoLayer = true, 0);
  }

  convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  fileChangeEvent(input) {
    this.convertToBase64(input.target.files[0]).then( (base64: string) => {
      this.baseImage = base64;
      this.storageService.storeImage(base64);
    });
  }

  removeImage(e) {
    e.preventDefault();
    this.baseImage = null;
    this.storageService.removeImage();
  }
}
