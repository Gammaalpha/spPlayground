import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpPlaygroundWebPartComponent } from './sp-playground-web-part.component';

describe('SpPlaygroundWebPartComponent', () => {
  let component: SpPlaygroundWebPartComponent;
  let fixture: ComponentFixture<SpPlaygroundWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpPlaygroundWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpPlaygroundWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
