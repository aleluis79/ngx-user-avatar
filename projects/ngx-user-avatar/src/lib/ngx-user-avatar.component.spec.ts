import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUserAvatarComponent } from './ngx-user-avatar.component';

describe('NgxUserAvatarComponent', () => {
  let component: NgxUserAvatarComponent;
  let fixture: ComponentFixture<NgxUserAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxUserAvatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
