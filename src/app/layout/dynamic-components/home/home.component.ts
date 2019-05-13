import { Component, OnInit } from '@angular/core';
import { TabbedComponent } from '../../model/tabbed-component';
import { TabComponent } from '../../components/tab/tab.component';
import { TabService } from '../../services/tab.service';
import { Comp1 } from '../comp1/comp1.component'
// import { Comp2Component } from '../comp2/comp2.component'


const knownComponents = {
  Comp1: Comp1,
};

@Component({
  selector: 'lims-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home extends TabbedComponent implements OnInit {

  constructor(_host: TabComponent,
    private ts: TabService) {
    super(_host);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  get componentName(): string {
    return 'HomeComponent';
  }

  

  saveDataContext(): void {

  }
  loadDataContext(): void {

  }
}
