import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelDetailPage } from './travel-detail.page';
import { IonicRatingModule } from 'ionic4-rating/dist';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: TravelDetailPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        IonicRatingModule,
        SignaturePadModule,
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [TravelDetailPage]
})
export class TravelDetailPageModule {
}
