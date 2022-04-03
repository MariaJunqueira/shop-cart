import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  @Input() unit: string = 'unit';

  constructor() {}

  ngOnInit() {}
}
