// Imports modules.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// Import layouts.
import { DefaultLayoutComponent } from '../component/default-layout.component';

// Imports pages.
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { TermsPageComponent } from 'src/app/pages/terms-page/terms-page.component';
import { PrivacyPageComponent } from 'src/app/pages/privacy-page/privacy-page.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      },
      {
        path: "terms",
        component: TermsPageComponent
      },
      {
        path: "privacy",
        component: PrivacyPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DefaultRoutingModule {}
