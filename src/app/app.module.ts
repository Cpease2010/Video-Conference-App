import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';

import { AppComponent } from './app.component';

const agoraConfig: AgoraConfig = {
  AppID: '8690cdef67694df8ac477960cf8420ed',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularAgoraRtcModule.forRoot(agoraConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
