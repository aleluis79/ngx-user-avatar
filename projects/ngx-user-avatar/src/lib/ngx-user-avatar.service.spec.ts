import { TestBed } from '@angular/core/testing';

import { NgxUserAvatarService } from './ngx-user-avatar.service';

describe('NgxUserAvatarService', () => {
  let service: NgxUserAvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUserAvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
