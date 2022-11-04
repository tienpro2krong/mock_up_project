import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./components/main/main.component";
import { HomeComponent } from "./components/home/home.component";
import { RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    ProductDetailComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "products/:id",
        component: ProductDetailComponent,
      },
      {
        path: "products",
        component: HomeComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
