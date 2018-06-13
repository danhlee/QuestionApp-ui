import { TestBed, inject } from '@angular/core/testing';

import { QuestionAppService } from './question-app.service';

describe('QuestionAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionAppService]
    });
  });

  it('should be created', inject([QuestionAppService], (service: QuestionAppService) => {
    expect(service).toBeTruthy();
  }));
});
