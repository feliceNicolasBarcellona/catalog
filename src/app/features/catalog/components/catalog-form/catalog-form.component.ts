import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Device } from '../../model/device';

@Component({
  selector: 'fb-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.css']
})
export class CatalogFormComponent implements OnChanges {
  @Input() active: Device | undefined;
  @Output() save: EventEmitter<Device> = new EventEmitter()
  @Output() reset: EventEmitter<any> = new EventEmitter()
  @ViewChild('f') form: NgForm |undefined


  saveHandler(){
    this.save.emit(this.form?.value);

  }

  ngOnChanges(changes: SimpleChanges): void {
    const active: Device = changes['active'].currentValue
    if(this.form && !active.id){
      this.form?.reset()
    }
  }

  resetHandler(){
    this.reset.emit()
    this.form?.reset()
  }
}
