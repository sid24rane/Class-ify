/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharenotesComponent } from './sharenotes.component';

describe('SharenotesComponent', () => {
  let component: SharenotesComponent;
  let fixture: ComponentFixture<SharenotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharenotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
