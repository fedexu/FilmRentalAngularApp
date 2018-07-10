import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCardComponentComponent } from './film-card-component.component';

describe('FilmCardComponentComponent', () => {
  let component: FilmCardComponentComponent;
  let fixture: ComponentFixture<FilmCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
