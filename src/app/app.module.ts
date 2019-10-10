import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { TdMediaService } from '@covalent/core/media';

import {
  MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
  MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
  MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
  MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule, MatChipsModule
} from '@angular/material';

import {
  CovalentCommonModule, CovalentMediaModule, CovalentExpansionPanelModule, CovalentDialogsModule, CovalentSearchModule,
  CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule
} from '@covalent/core';

//App components
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentBaseEchartsModule,
    CovalentCommonModule, 
    CovalentMediaModule, 
    CovalentExpansionPanelModule, 
    CovalentDialogsModule, 
    CovalentSearchModule,
    CovalentNotificationsModule, 
    CovalentMenuModule, 
    CovalentDataTableModule, 
    CovalentMessageModule,
    MatButtonModule, 
    MatListModule, 
    MatIconModule, 
    MatCardModule, 
    MatMenuModule, 
    MatInputModule, 
    MatButtonToggleModule,
    MatProgressSpinnerModule, 
    MatSelectModule, 
    MatSlideToggleModule, 
    MatDialogModule, 
    MatSnackBarModule, 
    MatToolbarModule,
    MatTabsModule, 
    MatSidenavModule, 
    MatTooltipModule, 
    MatRippleModule, 
    MatRadioModule, 
    MatGridListModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSliderModule, 
    MatAutocompleteModule, 
    MatChipsModule
  ],
  providers: [TdMediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
