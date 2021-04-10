import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoGuard } from './account-info.guard';
import { AdminkaGuardGuard } from './adminka-guard.guard';
import { AdminkaComponent } from './adminka/adminka.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { TextComponent } from './text/text.component';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  {path: 'adminka', component: AdminkaComponent, canActivate: [AdminkaGuardGuard]},
  {path: 'app', component: AppComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'content', component: ContentComponent, resolve: {data: AccountInfoGuard}},
  {path: 'text', component: TextComponent},
  {path: 'profile', component: ProfileComponent, canDeactivate: [UnsavedGuard]},
  {path: '', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
