import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Work } from '../interfaces/work';
import { WorkService } from '../services/work-service';
import { fadeInAnimation } from '../_animations/fade-in.animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '' }
})
export class WorkComponent implements OnInit {
  work: Work;
  workId: number;
  workList: Work[];
  workSubscription: Subscription;
  prevDesactivated: boolean;
  nextDesactivated: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private workService: WorkService) {}

  ngOnInit() {
    this.workSubscription = this.workService.worksSubject.subscribe(
      (works: Work[]) => {
        this.workList = works;
      }
    );
    this.workService.emitWorkSubject();
    this.workId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.work = this.workService.getWorkById(this.workId);
    if (this.workId <= 0) {
      this.prevDesactivated = true;
    } else {
      this.prevDesactivated = false;
    }
    if (this.workId >= this.workList.length - 1) {
      this.nextDesactivated = true;
    } else {
      this.nextDesactivated = false;
    }
  }

  nextWork() {
    this.workId += 1;
    this.router.navigate(['/work', this.workId]);
    if (this.workId >= this.workList.length - 1) {
      this.nextDesactivated = true;
    } else {
      this.nextDesactivated = false;
    }

    if (this.workId <= 0) {
      this.prevDesactivated = true;
    } else {
      this.prevDesactivated = false;
    }
    this.work = this.workService.getWorkById(this.workId);
  }

  prevWork() {
    this.workId -= 1;
    this.router.navigate(['/work', this.workId]);
    if (this.workId >= this.workList.length - 1) {
      this.nextDesactivated = true;
    } else {
      this.nextDesactivated = false;
    }

    if (this.workId <= 0) {
      this.prevDesactivated = true;
    } else {
      this.prevDesactivated = false;
    }
    this.work = this.workService.getWorkById(this.workId);
  }
}
