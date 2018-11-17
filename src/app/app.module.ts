import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { LoginPage } from '../pages/login/login';
import { UserloginPage } from '../pages/userlogin/userlogin';
import { SearchPage } from '../pages/search/search';
import { SipPage } from '../pages/sip/sip';
import { FundsPage } from '../pages/funds/funds';
import { PlanningPage } from '../pages/planning/planning';
import { SipCalculatorPage } from '../pages/sip-calculator/sip-calculator';
import { TransactPage } from '../pages/transact/transact';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { CallNumber } from '@ionic-native/call-number';
import { KycPage } from '../pages/kyc/kyc';

@NgModule({
  declarations:
  [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    UserloginPage,
    SearchPage,
    SipPage,
    FundsPage,
    PlanningPage,
    SipCalculatorPage,
    TransactPage,
    KycPage,

  ],
  imports:
  [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents:
  [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    UserloginPage,
    SearchPage,
    SipPage,
    FundsPage,
    PlanningPage,
    SipCalculatorPage,
    TransactPage,
    KycPage,
  ],
  providers:
  [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    CallNumber,

  ]
})
export class AppModule{}
