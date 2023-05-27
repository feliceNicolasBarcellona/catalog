import { Component, Input } from '@angular/core';

@Component({
  selector: 'fb-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  @Input() value: number | undefined
}
