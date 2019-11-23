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

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = 'Patra';
  }
}
