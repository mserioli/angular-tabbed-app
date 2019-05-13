import { Component, OnInit } from '@angular/core';
import { TabService } from '../../services/tab.service';
import { LimsTab } from '../../model/lims-tab';
import { Router } from '@angular/router';



@Component({
  selector: 'lims-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(
    private ts: TabService) { }

  openComponent(component: string, openNewTab: boolean) {
    // this.ts.newTab(
    //   {
    //     newTab: openNewTab,
    //     closeable: true,
    //     tab: new LimsTab(
    //       component,
    //       knownComponents[component],
    //       {},
    //     ),
    //   });
  }

  back() {
    this.ts.back(1);
  }
}
