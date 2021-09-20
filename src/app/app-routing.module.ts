import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewGalleryLinkComponent } from './view-gallery-link/view-gallery-link.component';
import { CanAuthActivate, CanLoginActivate } from '../guards/auth.gaurd';
import { TextareaHighlightModule } from './textarea-highlight/textarea-highlight.module';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent,pathMatch:'full',canActivate: [CanLoginActivate]},
  {path:'view-gallery',component:ViewGalleryLinkComponent,pathMatch:'full',canActivate: [CanAuthActivate]},
  {path:'about-us',component:AboutUsComponent,pathMatch:'full'},
];

@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent,
    ViewGalleryLinkComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule,CommonModule,TextareaHighlightModule,],
  exports: [RouterModule,AboutUsComponent,HomeComponent,HeaderComponent,FooterComponent,LoginComponent,TextareaHighlightModule],
  providers: [CanAuthActivate, CanLoginActivate],

})
export class AppRoutingModule { }
