import { Injectable } from '@angular/core';
import { TabAction } from '../model/tab-action';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TabService {

  private tabActions = new Subject<TabAction>();

  constructor() {
  }

  get tabsObservable(): Observable<TabAction> {
    return this.tabActions.asObservable();
  }

  newTab(tabAction: TabAction) {
    this.tabActions.next(tabAction);
  }

  back(steps: number) {
    this.tabActions.next({
      back: steps
    });
  }
}
