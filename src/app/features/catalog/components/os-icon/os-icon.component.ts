import { Component, Input } from '@angular/core';

@Component({
  selector: 'fb-os-icon',
  templateUrl: './os-icon.component.html',
  styleUrls: ['./os-icon.component.css']
})
export class OsIconComponent {
  @Input() os: string | undefined
}
