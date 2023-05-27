import { Injectable } from '@angular/core';
import { Device } from '../model/device';

@Injectable({
  providedIn: 'root'
})
export class CatalogStore {

  devices: Device[] = [];
  active: Device = {} as Device;

  load(devices: Device[]) {
    this.devices = devices;
  }

  add(device: Device) {
    this.devices.push(device);
    this.active = {} as Device;
  }

  delete(id: number) {
    const index = this.devices.findIndex(d => d.id === id);
    this.devices.splice(index, 1);
    this.active = {} as Device;
  }

  edit(device: Device) {
    const index = this.devices.findIndex(d => d.id === this.active?.id);
    this.devices[index] = device;
  }

  reset() {
    this.active = {} as Device;
  }
}
