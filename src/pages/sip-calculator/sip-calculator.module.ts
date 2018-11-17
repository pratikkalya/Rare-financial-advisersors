import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SipCalculatorPage } from './sip-calculator';

@NgModule({
  declarations: [
    SipCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(SipCalculatorPage),
  ],
})
export class SipCalculatorPageModule {}
