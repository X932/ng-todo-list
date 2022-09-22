import { Component } from "@angular/core";
import { HomeService } from "./home.service";
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  constructor(private homeService: HomeService) {
    homeService.getHomePage();
  }
}
