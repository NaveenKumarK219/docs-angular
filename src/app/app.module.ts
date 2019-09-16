import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocsComponent } from './docs/docs.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialImportModule} from './material-import.module';
import {MarkdownModule, MarkdownService, MarkedOptions} from 'ngx-markdown';
import {NotifierModule} from 'angular-notifier';
import {LMarkdownEditorModule} from 'ngx-markdown-editor';

@NgModule({
    declarations: [
        AppComponent,
        DocsComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialImportModule,
        FormsModule,
        ReactiveFormsModule,
        MarkdownModule,
        LMarkdownEditorModule,
        NotifierModule.withConfig({
                    position: {
                        horizontal: {
                            position: 'right',
                            distance: 12
                        },
                        vertical: {
                            position: 'top',
                            distance: 12,
                            gap: 10
                        }
                    },
                    theme: 'material',
                    behaviour: {
                        autoHide: 5000,
                        onClick: false,
                        onMouseover: 'pauseAutoHide',
                        showDismissButton: true,
                        stacking: 4
                    },
                    animations: {
                        enabled: true,
                        show: {
                            preset: 'slide',
                            speed: 300,
                            easing: 'ease'
                        },
                        hide: {
                            preset: 'fade',
                            speed: 300,
                            easing: 'ease',
                            offset: 50
                        },
                        shift: {
                            speed: 300,
                            easing: 'ease'
                        },
                        overlap: 150
                    }
        })
    ],
    providers: [MarkdownService, MarkedOptions],
    bootstrap: [AppComponent]
})
export class AppModule { }
