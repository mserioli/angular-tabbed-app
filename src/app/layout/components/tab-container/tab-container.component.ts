import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { TabComponent } from '../tab/tab.component';
import { UiTab } from '../../model/ui-tab';
import { Home } from '../../dynamic-components/home/home.component';
import { LimsTab } from '../../model/lims-tab';

@Component({
  selector: 'lims-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements OnInit {

  private uiTabsSelectionHistory: UiTab[] = [];
  uiTabs: UiTab[] = [];
  private currentTab: UiTab;

  @ViewChild('tabContent', { read: ViewContainerRef }) vc: ViewContainerRef;
  private tabComponentFactory: ComponentFactory<TabComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private ts: TabService,
  ) { }

  ngOnInit() {
    this.tabComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TabComponent);
    this.ts.tabsObservable.subscribe(ta => {
      if (ta.back) {
        if (this.currentTab.limsTabs.length > 1) {
          this.currentTab.limsTabs.splice(this.currentTab.limsTabs.length - ta.back);
        }
      } else {
        let ut: UiTab;
        if (ta.newTab || this.uiTabs.length <= 0) {
          ut = new UiTab(true, ta.closeable);
          this.currentTab = ut;
          this.uiTabs.push(ut);
        }
        this.currentTab.limsTabs.push(ta.tab);
      }
      this.currentTab.limsTabs.forEach(lt => {
        lt.shown = false;
      });
      this.selectUiTab(this.currentTab);
    });

    this.ts.newTab(
      {
        newTab: true,
        closeable: false,
        tab: new LimsTab(
          'Home',
          Home,
        {},
        ),
      },
    );

  }

  selectUiTab(ut: UiTab) {
    // this.currentTab !== ut => means tab change!
    if (!ut.currentLimTab.shown || !ut.active) {
      this.currentTab = ut;
      this.uiTabs.forEach(utt => utt.active = false);
      this.currentTab.active = true;
      this.showTab(ut);
    }
  }

  private showTab(ut: UiTab) {
    ut.currentLimTab.shown = true;
    this.vc.clear();
    const ref = this.vc.createComponent(this.tabComponentFactory);
    const tc = ref.instance;
    tc.tab = ut.currentLimTab;
    this.uiTabsSelectionHistory.push(ut);
  }

  closeTab(ut: UiTab) {
    if (this.uiTabs.length > 1) {
      const ix = this.uiTabs.indexOf(ut);
      if (ut.limsTabs.filter(t => t.dataChanged).length > 0) {
        alert('ocio!');
      }
      this.uiTabs.splice(ix, 1);
      this.uiTabsSelectionHistory = this.arrayRemove(this.uiTabsSelectionHistory, ut);

      const previousTab = this.uiTabsSelectionHistory.pop();

      this.selectUiTab(previousTab || this.uiTabs[0]);
    }
  }

  arrayRemove(arr, value) {

    return arr.filter(function (ele) {
      return ele !== value;
    });

  }
}
