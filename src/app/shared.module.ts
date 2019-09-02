import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { RouterModule }             from "@angular/router";
import { SubmitDirective } from './submit.directive';
@NgModule({
  declarations: [SubmitDirective],
  imports: [
    HttpModule,
    NgbModule,
    FormsModule,
    NgReduxModule,
    RouterModule
  ]
})
export class SharedModule { }
