import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MomentModule } from 'angular2-moment';

import { MyApp } from './app.component';
import { ChatsPage } from './../pages/chats/chats';
import { MessagesPage } from '../pages/messages/messages';
import { PhoneService } from '../services/phone';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { VerificationPage } from '../pages/verification/verification';

@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhoneService,
  ]
})
export class AppModule {}
