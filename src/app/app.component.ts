import { Component, OnInit } from "@angular/core";
import { Theme } from "@nativescript/theme";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        console.log("Original System mode:", androidx.appcompat.app.AppCompatDelegate.getDefaultNightMode());
        console.log("Original NS mode:", Theme.getMode());
        console.log("Changing system mode to light...");
        androidx.appcompat.app.AppCompatDelegate.setDefaultNightMode(androidx.appcompat.app.AppCompatDelegate.MODE_NIGHT_NO);
        console.log("New System mode:", androidx.appcompat.app.AppCompatDelegate.getDefaultNightMode());
        console.log("Changing NS mode to light...");
        Theme.setMode(Theme.Light);
        console.log("New NS mode:", Theme.getMode());
    } 
}
