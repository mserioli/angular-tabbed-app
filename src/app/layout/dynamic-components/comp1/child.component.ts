import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TabbedComponent } from '../../model/tabbed-component';
import { TabComponent } from '../../components/tab/tab.component';
import { TabService } from '../../services/tab.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'lims-child',
  templateUrl: './child.component.html',
})
export class Child extends TabbedComponent implements OnChanges  {
  constructor(_host: TabComponent,
    private ts: TabService,
    private fb: FormBuilder) {
    super(_host);
  }


  @Input() inputValue: string;

  get componentName(): string {
    return 'Child';
  }

   ngOnChanges(changes: SimpleChanges): void {
    if (this.componentInitialized) {
      
      // if component has been initialized it means that has already loaded saved context data if any, and the input properties ar requiring new data
      this.loadHugeAmountOfData();
    }
  }

  saveDataContext(): void {
    this.dataContext[this.componentName].inputValue = this.inputValue;
    // save other lists etc
  }

  loadDataContext(): void {
    if (this.dataContext[this.componentName]) {
      let oldInputValue = this.dataContext[this.componentName].inputValue;

      if (oldInputValue === this.inputValue) {
        // load lists etc from context
      } else {
        this.loadHugeAmountOfData();
      }



    } else {
      this.dataContext[this.componentName] = {};
      this.loadHugeAmountOfData();
    }
  }

  loadHugeAmountOfData(): void {
    console.log('I\'m loading data bacause I ad no data or context inputs has changed');
  }
}