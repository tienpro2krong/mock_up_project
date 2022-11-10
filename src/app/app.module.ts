import { LoginComponent } from "./components/login/login.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./components/main/main.component";
import { HomeComponent } from "./components/home/home.component";
import { RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

import { UserDetailComponent } from "./components/user-detail/user-detail.component";

import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { ContactComponent } from "./components/contact/contact.component";

import { CarouselModule } from "ngx-bootstrap/carousel";

import { AdsComponent } from "./components/ads/ads.component";
import { HomepageComponent } from "./components/homepage/homepage.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    LoginComponent,
    ProductDetailComponent,
    UserDetailComponent,
    SideBarComponent,
    ContactComponent,
    HomepageComponent,
    AdsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
      {
        path: "homepage",
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
      {
        path: "user",
        component: UserDetailComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },
      {
        path: "home",
        component: HomepageComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
