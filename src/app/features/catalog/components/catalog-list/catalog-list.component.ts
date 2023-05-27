import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Device } from '../../model/device';

@Component({
  selector: 'fb-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent {

 @Input() devices: Device[] | undefined
 @Input() active: Device | undefined
 @Output() setActive: EventEmitter<Device> = new EventEmitter();
 @Output() delete: EventEmitter<Device> = new EventEmitter();

 deleteHandler(event: MouseEvent, device: Device){
  event.stopPropagation();
  this.delete.emit(device)
 }

}
