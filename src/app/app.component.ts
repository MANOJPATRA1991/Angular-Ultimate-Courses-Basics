import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string;
  logo: string = 'img/logo.svg';
  name: string = "Manoj";
  
  constructor() {
    this.title = "Ultimate Angular";
  }

  handleClick(value: string) {
    console.log(value);
    this.name = value;
  }
}
