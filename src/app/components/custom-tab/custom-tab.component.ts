import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.scss']
})
export class CustomTabComponent {
 selectedTabId = 1;
readMore: boolean = false;
 
 tabData = [
    { id: 1, title: 'Campaign' },
    { id: 2, title: 'Documents' },
    { id: 3, title: 'Updates' },   
  ];

selectTab(id: number) {
    this.selectedTabId = id;
  }

toggleReadMore() {
  this.readMore = !this.readMore;
}
}
