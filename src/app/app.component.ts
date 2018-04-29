import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDisplayed: boolean = false;
  loggedClicks: Date[] = [];

  onToggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
    this.loggedClicks.push(new Date());
  }

  // isGreater4(log) {
  //   return 3 < this.loggedClicks.findIndex(l => log == l);
  // }

  // getColor(log) {
  //   if (this.isGreater4(log)) {
  //     return "blue"
  //   } else {
  //     return "white";
  //   }
  // }
}
