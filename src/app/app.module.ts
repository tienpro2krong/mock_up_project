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

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AdsComponent } from "./components/ads/ads.component";
import { HomepageComponent } from "./components/homepage/homepage.component";

import { PaginationModule } from "ngx-bootstrap/pagination";

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
    NgxSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,

    CarouselModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "/homepage",
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
      {
        path: "user",
        component: UserDetailComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },
      {
        path: "homepage",
        component: HomepageComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
