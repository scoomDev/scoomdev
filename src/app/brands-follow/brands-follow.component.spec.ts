import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsFollowComponent } from './brands-follow.component';

describe('BrandsFollowComponent', () => {
  let component: BrandsFollowComponent;
  let fixture: ComponentFixture<BrandsFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
