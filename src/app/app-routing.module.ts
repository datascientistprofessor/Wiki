import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'content', component: ContentComponent},
  {path: 'text', component: TextComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
