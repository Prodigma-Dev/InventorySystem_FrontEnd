import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Component, effect, inject, OnInit, signal, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { navItems } from './sidebar/sidebar-data';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { HeaderComponent } from './header/header.component';
import { HorizontalSidebarComponent } from "./sidebar/horizontal-sidebar/horizontal-sidebar.component";
import { VerticalNavItemComponent } from './sidebar/vertical-sidebar/vertical-nav-item/vertical-nav-item.component';
import { VerticalSidebarComponent } from './sidebar/vertical-sidebar/vertical-sidebar.component';
import { NavService } from 'src/app/core/services/nav.service';
import { SettingsService } from 'src/app/core/services/settings.service';
import { ThemeSkinComponent } from 'src/app/shared/components/theme-skin/theme-skin.component';
import { BreadcrumbComponent } from "../../shared/components/breadcrumb/breadcrumb.component";
import { FooterComponent } from "./footer/footer.component";

const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';
const MONITOR_VIEW = 'screen and (min-width: 1024px)';
const BELOWMONITOR = 'screen and (max-width: 1023px)';


@Component({
  selector: 'app-full',
  imports: [
    RouterModule,
    VerticalNavItemComponent,
    MaterialModule,
    CommonModule,
    VerticalSidebarComponent,
    NgScrollbarModule,
    HeaderComponent,
    ThemeSkinComponent,
    HorizontalSidebarComponent,
    BreadcrumbComponent,
    FooterComponent
],
  templateUrl: './full.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class FullComponent implements OnInit {
  settingsService = inject(SettingsService);
  settings = this.settingsService.settings;

  navItems = navItems;

  @ViewChild('leftsidenav')
  public sidenav: MatSidenav | any;

  //get options from service
  private layoutChangesSubscription = Subscription.EMPTY;
  private htmlElement!: HTMLHtmlElement;
  isMobileScreen = signal<boolean>(false);
  isOpenRightSidebar = signal<boolean>(false);
  isContentWidthFixed = signal<boolean>(false);

  get isOver(): boolean {
    return this.isMobileScreen();
  }


  constructor(private breakpointObserver: BreakpointObserver, private navService: NavService) {

    this.htmlElement = document.querySelector('html')!;
    this.htmlElement.classList.add('light-theme');
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
      .subscribe((state) => {
        this.isMobileScreen.set(state.breakpoints[MOBILE_VIEW]);
      });

    effect(() => {
      this.setTheme();
    });
  }

  ngOnInit(): void { }

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.settingsService.updateSettings({ menuType: this.isContentWidthFixed() ? "mini" : "full" });
  }

  onSidenavClosedStart() {
    this.settingsService.updateSettings({ menuType: "mini" });
  }


  openThemeBuilder() {
    this.isOpenRightSidebar.set(!this.isOpenRightSidebar());
  }

  setTheme() {
    const elem = document.getElementsByTagName('html')[0];
    elem.className = '';
    elem.classList.add(this.settings().themeColor + '-' + this.settings().themeMode);
    elem.classList.add(this.settings().themeMode);

    this.isContentWidthFixed.set(this.settings().menuType == "full")
  }

}
