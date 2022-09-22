import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  public getHomePage(): void {
    this.httpClient.get(Routes.Users).subscribe((res) => {
      console.log(res);
    });
  }
}

enum Routes {
  Users = "/users",
}
