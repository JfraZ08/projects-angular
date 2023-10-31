import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondPageComponent } from './second-page/second-page.component';


export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home-component', component: HomeComponent },
  { path: 'second-component', component: SecondPageComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

