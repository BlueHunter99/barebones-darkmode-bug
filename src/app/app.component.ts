import { AfterViewInit, Component } from "@angular/core";
import { Theme } from "@nativescript/theme";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        setTimeout(() => {
            Theme.toggleMode();
            Theme.toggleMode();
        }, 1000);
    }
}
