import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import zh from '@angular/common/locales/zh';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultComponent } from './views/result/result.component';
import { QuestionComponent } from './views/question/question.component';
import { HomeComponent } from './views/home/home.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    QuestionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NgxEchartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
