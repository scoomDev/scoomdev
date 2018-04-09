import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../_animations/fade-in.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
