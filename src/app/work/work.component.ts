import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { works } from '../../data/works';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  work;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const workId = this.route.snapshot.paramMap.get('id');
    this.work = works[workId];
  }
}
