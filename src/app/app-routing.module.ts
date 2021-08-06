import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DetailTaskComponent } from "./detail-task/detail-task.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "task/:taskId",
    component: DetailTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
