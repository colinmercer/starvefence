import { Injectable } from '@angular/core';

import { IDeliveryClient, DeliveryClient, TypeResolver } from 'kentico-cloud-delivery';

import { Homepage } from '../models/homepage';
import { Content } from '../models/content';

@Injectable({ providedIn: 'root' })
export class KenticoClientService {
  deliveryClient: IDeliveryClient

  constructor() {
    this.deliveryClient = new DeliveryClient({
      projectId: 'abbf43ee-91fc-003f-5d2e-2d0550aafb77',
      typeResolvers: [
        new TypeResolver('homepage', () => new Homepage()),
        new TypeResolver('content', () => new Content()),
      ]
    });
  }
}