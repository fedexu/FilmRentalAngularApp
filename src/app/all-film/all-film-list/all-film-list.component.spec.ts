import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFilmListComponent } from './all-film-list.component';

describe('AllFilmListComponent', () => {
  let component: AllFilmListComponent;
  let fixture: ComponentFixture<AllFilmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFilmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
