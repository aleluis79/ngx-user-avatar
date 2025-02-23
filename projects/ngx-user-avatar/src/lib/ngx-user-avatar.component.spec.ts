import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUserAvatarComponent } from './ngx-user-avatar.component';
import { ComponentRef } from '@angular/core';

describe('NgxUserAvatarComponent', () => {
  let component: NgxUserAvatarComponent;
  let fixture: ComponentFixture<NgxUserAvatarComponent>;
  let componentRef: ComponentRef<NgxUserAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxUserAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUserAvatarComponent);
    componentRef = fixture.componentRef;
    componentRef.setInput('fullname', 'Jhon Doe');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
