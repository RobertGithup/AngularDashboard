import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  myControl = new FormControl();
  mymodel: string = "";
  options: string[] = ["Chennai", "Banglore", "Delhi"];

  valuechange(event) {
    console.log("text event changed");
  }

  constructor() {}

  ngOnInit() {}
  valuechange1(newValue) {
    this.mymodel = newValue;
    console.log(newValue);
  }
}
