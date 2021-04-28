import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { TextComponent } from './text/text.component';
import { ProfileComponent } from './profile/profile.component';
import { ReverseStringPipe } from './pipes/reverse.pipe';
import { LoggingService } from './services/logging.service';
import { AdminkaComponent } from './adminka/adminka.component';
import { AdminModuleModule } from './modules/admin-module/admin-module.module';
import { ModelDrivenFormsComponent } from './ModelDrivenForms/model-driven-forms/model-driven-forms.component';
import { TemplateDrivenFormsComponent } from './TemplateDrivenForms/template-driven-forms/template-driven-forms.component';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    TextComponent,
    ProfileComponent,
    ReverseStringPipe,
    AdminkaComponent,
    ModelDrivenFormsComponent,
    TemplateDrivenFormsComponent,
    LoginComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModuleModule,
    ReactiveFormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
