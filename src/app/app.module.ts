import { DataService } from './data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule, MatProgressBarModule, MatAutocompleteModule, MatListModule, MatChipsModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatOptionModule, MatDialogModule, MatTooltipModule, MatSlideToggleModule, MatTabsModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectTemplateDialogComponent } from './select-template-dialog/select-template-dialog.component';
import { AddPersonalInfoComponent } from './add-personal-info/add-personal-info.component';
import { FormSidebarComponent } from './form-sidebar/form-sidebar.component';
import { FormContentComponent } from './form-content/form-content.component'; 
import { RouterModule } from '@angular/router';
import { routes } from './app-routing';
import { LoginComponent } from './login/login.component';
import { ServerErrorComponent } from './server-error/server-error.component';
// Import your library
import { SlickModule, SlickComponent } from 'ngx-slick';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamComponent } from './team/team.component';
import { BiodataComponent } from './biodata/biodata.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ModelFormComponent } from './model-form';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { PreviewTemplateComponent } from './preview-template/preview-template.component';
import { BlogDetailPageComponent } from './blog-detail-page/blog-detail-page.component';

@NgModule({
  declarations: [
    AppComponent, DialogComponent, DialogOverviewExampleDialog, SelectTemplateDialogComponent, AddPersonalInfoComponent,
    FormSidebarComponent, FormContentComponent,LoginComponent,HomeComponent,ServerErrorComponent,PageNotFoundComponent, 
    FooterComponent, AboutUsComponent, BlogComponent, ContactUsComponent, TeamComponent, BiodataComponent,PreviewTemplateComponent,
    NewsLetterComponent, ModelFormComponent, BlogDetailPageComponent
  ],
  imports: [
    BrowserModule,FormsModule,BrowserAnimationsModule,MatRadioModule, MatProgressBarModule, MatAutocompleteModule, MatListModule,
    MatChipsModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatSelectModule, 
    MatInputModule, MatOptionModule, MatDialogModule, MatTooltipModule, MatSlideToggleModule, MatTabsModule, MatProgressSpinnerModule, 
    MatMenuModule, MatIconModule, MatButtonModule,
    FormsModule,    //added here too
    ReactiveFormsModule, //added here too,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false }), 
    // Specify your library as an import
    SlickModule.forRoot()
  ],
  providers: [SlickComponent,FormBuilder,DataService,HttpClient],
  entryComponents: [
    DialogOverviewExampleDialog,SelectTemplateDialogComponent,AddPersonalInfoComponent,PreviewTemplateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
