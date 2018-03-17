import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Work } from '../interfaces/work';
import { WorkService } from '../services/work-service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  work: Work;
  workList: Work[];
  workSubscription: Subscription;

  constructor(private route: ActivatedRoute, private workService: WorkService) {}

  ngOnInit() {
    const workId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.work = this.workService.getWorkById(workId);
  }
}
