import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {

  public loaderBarActive: BehaviorSubject<boolean>;

  constructor() {
    this.loaderBarActive = new BehaviorSubject(false);
   }
}
