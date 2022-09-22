import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailTaskComponent } from "./detail-task/detail-task.component";
import { HomePageModule } from "./home-page/home-page.module";
import { RequestInterceptor } from "./shared/services/interceptors/request/request.interceptor";

@NgModule({
  declarations: [AppComponent, DetailTaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
