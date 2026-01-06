import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { filter, Subscription } from 'rxjs';
import Hotjar from '@hotjar/browser';
import { injectContentsquareScript } from '@contentsquare/tag-sdk';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'clueChart';
  private routerSubscription?: Subscription;

  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService
  ) {}

  ngOnInit(): void {
    // Initialize Hotjar
    Hotjar.init(parseInt(environment.hotjarSiteId), 6);

    // Initialize ContentSquare
    injectContentsquareScript({
      siteId: environment.contentsquareSiteId,
      async: true,
      defer: false
    });

    // Subscribe to NavigationEnd events to track virtual page views
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.gtmService.pushTag({
          event: 'page_view',
          page_path: event.urlAfterRedirects
        });
        // Track route changes in Hotjar for SPA
        Hotjar.stateChange(event.urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
