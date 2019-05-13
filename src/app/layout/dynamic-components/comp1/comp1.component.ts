import { Component } from '@angular/core';
import { TabbedComponent } from '../../model/tabbed-component';
import { TabComponent } from '../../components/tab/tab.component';
import { TabService } from '../../services/tab.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'lims-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1  extends TabbedComponent {
constructor(_host: TabComponent,
    private ts: TabService,
    private fb: FormBuilder) {
    super(_host);
  }

testForm = this.fb.group({ name: ['']});
   


  get componentName(): string {
    return 'Comp1';
  }

  saveDataContext(): void {
    this.dataContext[this.componentName].name = this.testForm.get('name').value;  
  }

  loadDataContext(): void {
    if(this.dataContext[this.componentName]){
      this.testForm.get('name').setValue(this.dataContext[this.componentName].name);
    } else {
      this.dataContext[this.componentName] = {}
    }
  }
}