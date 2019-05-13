import { Component, OnInit, Input } from '@angular/core';
import { LimsTab } from '../../model/lims-tab';
import { TabService } from '../../services/tab.service';
import {Comp1 } from '../comp1/comp1.component';
import {knownComponents} from '../../../globals'; 

@Component({
  selector: 'lims-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButton implements OnInit {

  constructor(private ts: TabService,) { }

  @Input() component: string;
  @Input() srcImage: string;
  @Input() text: string;

  ngOnInit() {
  }

openComponent(openNewTab: boolean) {
    this.ts.newTab(
      {
        newTab: openNewTab,
        closeable: true,
        tab: new LimsTab(
          this.text,
          knownComponents[this.component],
          {},
        ),
      });
  }

}
