import { Component } from '@angular/core';

@Component({
  selector: 'app-donation-info',
  templateUrl: './donation-info.component.html',
  styleUrls: ['./donation-info.component.scss']
})
export class DonationInfoComponent {
 raisedAmount = 123456;
  targetAmount = 789192;
  
  get progressPercentage(): number {
    return (this.raisedAmount / this.targetAmount) * 100;
  }

  showMore = false;
  
  toggleMore() {
    this.showMore = !this.showMore;
  }
}
