import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sp-playground-web-part',
  templateUrl: './sp-playground-web-part.component.html',
  styleUrls: ['./sp-playground-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SpPlaygroundWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
