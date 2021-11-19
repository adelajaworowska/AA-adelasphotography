import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: 'aboutme', component: AboutMeComponent },
  { path: '', component: MainPageComponent },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
