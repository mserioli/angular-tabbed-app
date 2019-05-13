import { LimsTab } from './lims-tab';
import { TabComponent } from '../components/tab/tab.component';
import { OnInit, OnDestroy } from '@angular/core';

export abstract class TabbedComponent implements OnInit, OnDestroy {
  abstract get componentName(): string;

  tab: LimsTab;
  host: TabComponent;
  private _componentInitialized = false;

  constructor(
    private _host: TabComponent,
  ) {
    this.host = _host;
  }

  get componentInitialized(): boolean {
    return this._componentInitialized;
  }

  ngOnInit(): void {
    this.tab = this.host.tab;
    this.loadDataContext();
    this._componentInitialized = true;
  }

  ngOnDestroy(): void {
    this.saveDataContext();
  }

  get dataContext() {
    return this.tab.dataContext;
  }

  protected abstract saveDataContext(): void;
  protected abstract loadDataContext(): void;
}
