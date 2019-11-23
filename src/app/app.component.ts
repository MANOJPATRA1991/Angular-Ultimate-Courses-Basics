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

  handleChange(value: string) {
    this.name = value;
  }

  handleClick() {
    this.name = 'Patra';
  }
}
