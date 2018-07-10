import { AllFilmModule } from './all-film.module';

describe('AllFilmModule', () => {
  let allFilmModule: AllFilmModule;

  beforeEach(() => {
    allFilmModule = new AllFilmModule();
  });

  it('should create an instance', () => {
    expect(allFilmModule).toBeTruthy();
  });
});
