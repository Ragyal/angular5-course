import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: '<p>Warning, action could not be performed</p>',
    styles: [`
    p {
        background-color: #ff8080;
        border: 2px solid crimson;
        padding: 20px;
    }`]
})
export class WarningAlertComponent {

}