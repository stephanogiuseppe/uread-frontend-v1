import { Component, OnInit, Input } from '@angular/core';

import { Column } from './../../../../shared/models/Column.model';

@Component({
  selector: 'app-mini-column',
  templateUrl: './mini-column.component.html',
  styleUrls: ['./mini-column.component.scss']
})
export class MiniColumnComponent implements OnInit {
  @Input() public column: Column;

  constructor() {}

  public ngOnInit(): void {}
}
