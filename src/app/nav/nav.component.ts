import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('toggleNav', [
      state('open', style({
        transform: 'translate3D(0, 0, 0)'
      })),
      state('close', style({
        transform: 'translate3D(0, -100%, 0)'
      })),
      transition('open <=> close', animate('600ms cubic-bezier(0.19, 1, 0.22, 1)'))
    ])
  ]
})
export class NavComponent implements OnInit {

  open: boolean;
  navState: string;

  constructor() {
    this.open = false;
    this.navState = 'close';
  }

  ngOnInit() {
  }

  navToggle() {
    this.open = !this.open;
    if (this.open) {
      this.navState = 'open';
      document.querySelector('.hamburger').classList.remove('close');
      document.querySelector('.hamburger').classList.add('open');
    } else {
      this.navState = 'close';
      document.querySelector('.hamburger').classList.remove('open');
      document.querySelector('.hamburger').classList.add('close');
    }
  }

}
