import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { KenticoClientService } from './services/kentico.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    
    KenticoClientService
  ]
})
export class CoreModule { }
