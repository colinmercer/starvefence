import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { KenticoClientService } from '../core/services/kentico.service';
import { Homepage } from '../core/models/homepage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  public error?: string;
  homepage: Homepage

  constructor(
    private kenticoService: KenticoClientService,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.loadData();
    this.setTitleAndMetadata();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private setTitleAndMetadata() {
    this.title.setTitle('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    this.meta.updateTag({ name: 'description', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
    this.meta.updateTag({ property: 'og:title', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
    this.meta.updateTag({ property: 'og:image', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
    this.meta.updateTag({ property: 'og:site_name', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
    this.meta.updateTag({ property: 'og:description', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
    this.meta.updateTag({ name: 'twitter:card', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
    this.meta.updateTag({ name: 'twitter:site', content: '@xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
    this.meta.updateTag({ name: 'twitter:title', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
    this.meta.updateTag({ name: 'twitter:description', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
    this.meta.updateTag({ name: 'twitter:image', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' });
  }

  private loadData() {
    this.kenticoService.deliveryClient
      .items<Homepage>()
      .type('homepage')
      .depthParameter(2)
      .getObservable()
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(
        response => {
          this.homepage = response.items[0];
          this.setTitleAndMetadata();
          console.log('homepage', response)
        },
      );
  }
}