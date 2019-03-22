import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveallComponent } from './activeall.component';

describe('ActiveallComponent', () => {
  let component: ActiveallComponent;
  let fixture: ComponentFixture<ActiveallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
