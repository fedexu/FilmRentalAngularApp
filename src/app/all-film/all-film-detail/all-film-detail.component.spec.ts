import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFilmDetailComponent } from './all-film-detail.component';

describe('AllFilmDetailComponent', () => {
  let component: AllFilmDetailComponent;
  let fixture: ComponentFixture<AllFilmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFilmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFilmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
