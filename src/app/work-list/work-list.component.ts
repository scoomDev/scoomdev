import { Component, OnInit } from '@angular/core';

import { works } from '../../data/works';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {

  workList;

  constructor() {
    this.workList = works;
  }

  ngOnInit() {
  }

  cardHoverAnimation(event) {
    const cardId = event.target.dataset['id'];
    const cards = document.getElementsByName('card');
    for (let i = 0; i < cards.length; i++) {
      const element = cards[i];
      if (element.dataset['id'] !== cardId) {
        element.style.opacity = '0.2';
        element.style.filter = 'blur(3px)';
      }
    }
  }

  cardOutAnimation(event) {
    const cards = document.getElementsByName('card');
    for (let i = 0; i < cards.length; i++) {
      const element = cards[i];
      element.style.opacity = '1';
      element.style.filter = 'blur(0)';
    }
  }

}
