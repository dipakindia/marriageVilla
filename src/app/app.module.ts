
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule, MatProgressBarModule, MatAutocompleteModule, MatListModule, MatChipsModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatOptionModule, MatDialogModule, MatTooltipModule, MatSlideToggleModule, MatTabsModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DialogComponent, DialogOverviewExampleDialog } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectTemplateDialogComponent } from './select-template-dialog/select-template-dialog.component';
import { AddPersonalInfoComponent } from './add-personal-info/add-personal-info.component';
import { FormSidebarComponent } from './form-sidebar/form-sidebar.component';
import { FormContentComponent } from './form-content/form-content.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
    SelectTemplateDialogComponent,
    AddPersonalInfoComponent,
    FormSidebarComponent,
    FormContentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,BrowserAnimationsModule,
    MatRadioModule, MatProgressBarModule, MatAutocompleteModule, MatListModule, MatChipsModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatOptionModule, MatDialogModule, MatTooltipModule, MatSlideToggleModule, MatTabsModule, MatProgressSpinnerModule, MatMenuModule, MatIconModule, MatButtonModule 
  ],
  providers: [],
  entryComponents: [DialogOverviewExampleDialog,SelectTemplateDialogComponent,AddPersonalInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
